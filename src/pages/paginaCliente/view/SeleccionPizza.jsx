import { useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { usePedido } from '../../../store/PedidoContext';
import { RUTAS } from '../../../routes/router';
import { motion } from 'framer-motion';
import { tamanos } from '../../../backend/json/json';
import { pizzas } from '../../../backend/json/json';

export default function SeleccionPizza() {
  const location = useLocation();
  const { slug } = useParams();
  const { agregarPedido } = usePedido();
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const pizza =
    location.state ||
    pizzas.find(h =>
      h.nombre.toLowerCase().replace(/\s+/g, '-') === slug
    );


  if (!pizza) return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center">
      <p className="text-white text-xl">🍕 No se encontraron detalles de la pizza</p>
    </div>
  );

  const handleAgregar = () => {
    if (!tamanoSeleccionado) return;

    setIsAdding(true);
    const precioSeleccionado = pizza.precios.find(p => p.tamano_id === tamanoSeleccionado);

    agregarPedido({
      id: `${pizza.id}-${tamanoSeleccionado}`,
      pizza_id: pizza.id,
      nombre: pizza.nombre,
      tamano: tamanoSeleccionado,
      precio: precioSeleccionado.precio,
      descripcion: pizza.descripcion,
      imagen: pizza.imagen
    });

    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] text-white p-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header con animación */}
        <motion.header
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <Link
            to={RUTAS.MENU}
            className="flex items-center gap-2 bg-[#006A36] hover:bg-[#005A30] text-white py-2 px-4 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Volver al menú
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-[#FFCA03]">
            {pizza.nombre}
          </h1>
        </motion.header>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Imagen con animación */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-700 h-64"
          >
            {pizza.imagen ? (
              <img
                src={pizza.imagen}
                alt={pizza.nombre}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <span className="text-white text-2xl font-bold px-4 text-center">
                {pizza.nombre}
              </span>
            )}
          </motion.div>


          {/* Detalles */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">{pizza.descripcion}</p>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#FFCA03] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCA03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Selecciona el tamaño
              </h2>

              <div className="space-y-3">
                {pizza.precios.map((precio) => (
                  <motion.div
                    key={precio.tamano_id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setTamanoSeleccionado(precio.tamano_id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${tamanoSeleccionado === precio.tamano_id
                      ? 'border-[#FFCA03] bg-[#006A36]'
                      : 'border-gray-600 hover:border-[#ED1B24]'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">
                        {tamanos.find(t => t.id === precio.tamano_id)?.nombre || 'Tamaño'}

                      </span>
                      <span className="text-xl font-bold text-[#FFCA03]">
                        ${precio.precio.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              onClick={handleAgregar}
              disabled={!tamanoSeleccionado || isAdding}
              whileHover={tamanoSeleccionado ? { scale: 1.03 } : {}}
              whileTap={tamanoSeleccionado ? { scale: 0.97 } : {}}
              className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${tamanoSeleccionado
                ? 'bg-[#FFCA03] text-black hover:shadow-lg hover:shadow-[#FFCA03]/30'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
              {isAdding ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block mr-2"
                  >
                    🍕
                  </motion.span>
                  Agregando...
                </>
              ) : tamanoSeleccionado ? (
                'Agregar al carrito 🛒'
              ) : (
                'Selecciona un tamaño'
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
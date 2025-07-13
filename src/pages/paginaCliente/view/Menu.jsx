import { useState } from 'react';
import { pizzas, categorias, tamanos, hamburguesas, tipos } from "../../../backend/json/json";
import CategoriaFiltro from '../components/FiltroCategorias';
import { useNavigate } from 'react-router-dom';
import { RUTAS } from '../../../routes/router';
import { motion, AnimatePresence, stagger } from 'framer-motion';

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const navigate = useNavigate();
  const todosProductos = [...pizzas, ...hamburguesas];

  const productosFiltrados = categoriaActiva !== null
    ? todosProductos.filter(prod => Number(prod.categoria_id) === Number(categoriaActiva))
    : todosProductos;

  const getNombreCategoria = (id) => categorias.find(cat => cat.id === id)?.nombre || "";
  const getNombreTamano = (id) => tamanos.find(t => t.id === id)?.nombre || "";


  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverCard = {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const tapButton = {
    scale: 0.95
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#2C2C2C] min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#FFCA03] mb-4"
        >
          Nuestro Menú
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300"
        >
          Selecciona tu pizza favorita
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <CategoriaFiltro
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
      >
        <AnimatePresence>
          {productosFiltrados.map((item) => {
            const esHamburguesa = item.tipo_id === 2;


            return (
              <motion.div
                key={`${esHamburguesa ? 'hamb' : 'pizza'}-${item.id}`}
                layout
                variants={itemAnim}
                whileHover={hoverCard}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Imagen */}
                <div className="h-48 bg-gray-700 relative overflow-hidden group">
                  {item.imagen ? (
                    <motion.img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span>{item.nombre}</span>
                    </div>
                  )}

                  <motion.span
                    className="absolute top-4 right-4 bg-[#006A36] text-white text-sm font-bold px-3 py-1 rounded-full z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {getNombreCategoria(item.categoria_id)}
                  </motion.span>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3 className="text-xl font-bold text-white mb-2">
                    {item.nombre}
                  </motion.h3>
                  <motion.p className="text-gray-300 mb-4">
                    {item.descripcion}
                  </motion.p>

                  <div className="flex-grow">
                    {esHamburguesa ? (
                      <motion.div
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-gray-400">Precio</span>
                        <span className="text-[#FFCA03] font-bold">
                          ${item.precio.toLocaleString()}
                        </span>
                      </motion.div>
                    ) : (
                      item.precios.map((precio, index) => (
                        <motion.div
                          key={precio.tamano_id}
                          className="flex justify-between"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-gray-400">{getNombreTamano(precio.tamano_id)}</span>
                          <span className="text-[#FFCA03] font-bold">
                            ${precio.precio.toLocaleString()}
                          </span>
                        </motion.div>
                      ))
                    )}
                  </div>

                  <motion.button
                    onClick={() => {
                      const slug = item.nombre.toLowerCase().replace(/\s+/g, '-');

                      navigate(
                        esHamburguesa
                          ? RUTAS.HAMBURGUESA.DETALLES.replace(":slug", slug)
                          : RUTAS.PIZZA.DETALLES.replace(":slug", slug),
                        { state: item }
                      );
                    }}
                    className="mt-6 w-full bg-[#ED1B24] hover:bg-[#FFCA03] text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>


      </motion.div >
    </motion.section >
  );
}
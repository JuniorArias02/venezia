import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function CategoriaFiltro({ categorias, categoriaActiva, setCategoriaActiva }) {
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <>
      {/* Botón flotante en esquina inferior derecha (solo móvil) */}
      <button
        onClick={() => setSidebarAbierto(true)}
        className="fixed bottom-4 right-4 z-50 md:hidden bg-[#2C2C2C] text-[#FFCA03] px-4 py-3 rounded-full shadow-lg border border-[#FFCA03]/40 hover:bg-[#3c3c3c] transition"
      >
        <Menu className="inline-block mr-2" size={20} />
        Categorías
      </button>

      {/* Sidebar mobile */}
      <AnimatePresence>
      {sidebarAbierto && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <motion.div
              className="bg-black/50 absolute inset-0"
              onClick={() => setSidebarAbierto(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              className="relative z-10 w-72 bg-[#2C2C2C] border-r border-[#FFCA03]/20 h-full overflow-y-auto"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#FFCA03] mb-6 border-b border-[#FFCA03]/30 pb-2">
                  Categorías
                </h3>
                <button
                  onClick={() => {
                    setCategoriaActiva(null);
                    setSidebarAbierto(false);
                  }}
                  className={`w-full text-left px-4 py-3 mb-2 rounded-lg transition-colors ${!categoriaActiva
                    ? 'bg-[#ED1B24] text-white'
                    : 'text-gray-300 hover:bg-[#006A36]/10'
                    }`}
                >
                  Todos los Productos
                </button>
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => {
                      setCategoriaActiva(categoria.id);
                      setSidebarAbierto(false);
                    }}
                    className={`w-full text-left px-4 py-3 mb-2 rounded-lg transition-colors ${categoriaActiva === categoria.id
                      ? 'bg-[#FFCA03] text-[#2C2C2C] font-bold'
                      : 'text-gray-300 hover:bg-[#006A36]/10'
                      }`}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
      )}
      </AnimatePresence>

      {/* Desktop: scroll horizontal como texto */}
      <div className="hidden md:block overflow-x-auto max-w-4xl mx-auto px-4 mb-12">
        <div className="flex gap-6 w-max px-2">
          <span
            onClick={() => setCategoriaActiva(null)}
            className={`cursor-pointer whitespace-nowrap font-semibold transition-colors ${!categoriaActiva ? 'text-[#FFCA03] underline' : 'text-gray-400 hover:text-[#FFCA03]'
              }`}
          >
            Todas
          </span>

          {categorias.map((categoria) => (
            <span
              key={categoria.id}
              onClick={() => setCategoriaActiva(categoria.id)}
              className={`cursor-pointer whitespace-nowrap font-semibold transition-colors ${categoriaActiva === categoria.id
                ? 'text-[#FFCA03] underline'
                : 'text-gray-400 hover:text-[#FFCA03]'
                }`}
            >
              {categoria.nombre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

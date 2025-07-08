import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function CategoriaFiltro({ categorias, categoriaActiva, setCategoriaActiva }) {
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <div className="mb-12 max-w-4xl mx-auto px-4">
      {/* Versión mobile */}
      <button
        onClick={() => setSidebarAbierto(!sidebarAbierto)}
        className="md:hidden flex items-center bg-[#2C2C2C] text-[#FFCA03] px-4 py-2 rounded-lg border border-[#FFCA03]/30 mb-4 mx-auto"
      >
        <Menu className="mr-2" size={20} />
        {categoriaActiva ?
          categorias.find(c => c.id === categoriaActiva)?.nombre : 'Todas las Categorías'
        }
      </button>

      {/* Sidebar mobile */}
      {sidebarAbierto && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="bg-black/50 absolute inset-0"
            onClick={() => setSidebarAbierto(false)}
          />
          <div className="relative z-10 w-72 bg-[#2C2C2C] border-r border-[#FFCA03]/20 h-full overflow-y-auto">
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#FFCA03] mb-6 border-b border-[#FFCA03]/30 pb-2">
                Categorías
              </h3>
              <button
                onClick={() => {
                  setCategoriaActiva(null);
                  setSidebarAbierto(false);
                }}
                className={`w-full text-left px-4 py-3 mb-2 rounded-lg transition-colors ${!categoriaActiva ? 'bg-[#ED1B24] text-white' : 'text-gray-300 hover:bg-[#006A36]/10'
                  }`}
              >
                Todas las Pizzas
              </button>
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => {
                    setCategoriaActiva(categoria.id);
                    setSidebarAbierto(false);
                  }}
                  className={`w-full text-left px-4 py-3 mb-2 rounded-lg transition-colors ${categoriaActiva === categoria.id ? 'bg-[#FFCA03] text-[#2C2C2C] font-bold' : 'text-gray-300 hover:bg-[#006A36]/10'
                    }`}
                >
                  {categoria.nombre}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Versión desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setCategoriaActiva(null)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${!categoriaActiva ? 'bg-[#ED1B24] text-white' : 'bg-[#2C2C2C] text-[#FFCA03] hover:text-white border border-[#FFCA03]/30'
            }`}
        >
          Todas
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => setCategoriaActiva(categoria.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${categoriaActiva === categoria.id ? 'bg-[#FFCA03] text-[#2C2C2C] font-bold' : 'bg-[#2C2C2C] text-[#FFCA03] hover:text-white border border-[#FFCA03]/30'
              }`}
          >
            {categoria.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
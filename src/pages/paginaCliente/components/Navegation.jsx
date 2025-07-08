import { Link } from 'react-router-dom';
import { Instagram, ShoppingCart } from 'lucide-react';
import { usePedido } from '../../../store/PedidoContext';
export default function Navigation({ abrirCarrito }) {
  const { pedidos } = usePedido();

  return (
    <header className="bg-[#2C2C2C] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Nombre */}
        <Link to="/" className="group flex items-center space-x-3">
          {/* Logo redondo con borde amarillo */}
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#FFCA03] group-hover:border-[#ED1B24] transition-colors duration-300 p-0.5">
            <img
              src="/logo.jpeg"
              alt="Venezia Pizza's"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          {/* Texto simplificado y elegante */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold italic text-[#FFCA03] group-hover:text-white transition-colors duration-300">
              VENEZIA
            </span>
            <span className="text-xl font-light text-white group-hover:text-[#FFCA03] transition-colors duration-300">
              PIZZA'S
            </span>
          </div>
        </Link>

        {/* Menú central */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-[#FFCA03] transition-colors font-medium"
          >
            Inicio
          </Link>
          <Link
            to="/menu"
            className="text-white hover:text-[#FFCA03] transition-colors font-medium"
          >
            Menú
          </Link>
        </nav>

        {/* Iconos derecha */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/veneziapizzas_cucuta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ED1B24] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          <button
            onClick={abrirCarrito}
            className="relative text-white hover:text-[#FFCA03] transition-colors"
            aria-label="Carrito"
          >
            <ShoppingCart size={24} />
            {pedidos.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ED1B24] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {pedidos.length}
              </span>
            )}

          </button>

        </div>
      </div>
    </header>
  );
}
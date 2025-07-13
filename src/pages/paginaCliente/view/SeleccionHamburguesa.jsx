import { useLocation, Link } from 'react-router-dom';
import { usePedido } from '../../../store/PedidoContext';
import { RUTAS } from '../../../routes/router';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { hamburguesas } from '../../../backend/json/json';


export default function SeleccionHamburguesa() {
	const location = useLocation();
	const { slug } = useParams();
	
	const hamburguesa =
		location.state ||
		hamburguesas.find(h =>
			h.nombre.toLowerCase().replace(/\s+/g, '-') === slug
		);

	const { agregarPedido } = usePedido();

	if (!hamburguesa) return (
		<div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center">
			<p className="text-white text-xl">🍔 No se encontró la hamburguesa</p>
		</div>
	);

	const handleAgregar = () => {
		agregarPedido({
			id: `hamb-${hamburguesa.id}`,
			pizza_id: hamburguesa.id,
			nombre: hamburguesa.nombre,
			precio: hamburguesa.precio,
			descripcion: hamburguesa.descripcion,
			imagen: hamburguesa.imagen,
			tamano: null
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-screen bg-[#2C2C2C] text-white p-6"
		>
			<div className="max-w-3xl mx-auto">
				<Link to={RUTAS.MENU} className="text-[#FFCA03] mb-6 inline-block">← Volver al menú</Link>
				<h1 className="text-3xl font-bold mb-4">{hamburguesa.nombre}</h1>
				<div className="flex flex-col md:flex-row gap-6">
					<div className="h-64 w-full md:w-1/2 bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
						{hamburguesa.imagen ? (
							<img src={hamburguesa.imagen} className="w-full h-full object-cover" />
						) : (
							<span className="text-white text-2xl font-bold">Sin imagen</span>
						)}
					</div>
					<div className="md:w-1/2 space-y-4">
						<p className="text-gray-300">{hamburguesa.descripcion}</p>
						<p className="text-[#FFCA03] text-2xl font-bold">
							${hamburguesa.precio.toLocaleString()}
						</p>
						<motion.button
							onClick={handleAgregar}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full bg-[#FFCA03] text-black py-3 rounded-lg font-bold"
						>
							Agregar al carrito 🛒
						</motion.button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

import { usePedido } from "../../../store/PedidoContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ChevronRight } from "lucide-react";
import { tamanos } from "../../../backend/json/json";
import { useSede } from "../../../store/SedeContexte";
// Componente para mostrar la imagen o placeholder
const ItemImage = ({ imagen, nombre }) => {
	return imagen ? (
		<img
			src={imagen}
			alt={nombre}
			className="w-16 h-16 object-cover rounded-lg"
		/>
	) : (
		<div className="w-16 h-16 bg-[#ED1B24] rounded-lg flex items-center justify-center text-white font-bold text-xs text-center p-1">
			{nombre.split(" ")[0]}
		</div>
	);
};

export default function CarritoCompras({ abierto, cerrar }) {
	const { pedidos, eliminarPedido, limpiarPedidos } = usePedido();
	const { sedeActual } = useSede(); // Obtenemos la sede actual
	const total = pedidos.reduce((sum, p) => sum + p.precio, 0);

	const enviarWhatsApp = () => {
		if (!sedeActual || !sedeActual.telefono) {
			alert('Por favor selecciona una sede válida');
			return;
		}

		if (pedidos.length === 0) {
			alert('Tu carrito está vacío');
			return;
		}

		// Formatear el mensaje
		const mensaje = `¡Hola! Quiero hacer un pedido:\n\n` +
			`${pedidos
				.map(p => {
					const nombreTamano = tamanos.find(t => t.id === p.tamano)?.nombre || 'Tamaño único';
					return `➡ ${p.nombre} (${nombreTamano}) - $${p.precio.toLocaleString()}`;
				})
				.join('\n')
			}\n\n` +
			`*Total: $${total.toLocaleString()}*\n\n` +
			`Sede: ${sedeActual.barrio}\n` +
			`Dirección: ${sedeActual.direccion || 'No especificada'}`;

		// Codificar el mensaje para URL
		const mensajeCodificado = encodeURIComponent(mensaje);

		// Número de WhatsApp (asegúrate que tenga el formato correcto con código de país)
		const telefono = sedeActual.telefono.replace(/\D/g, ''); // Elimina todo excepto números

		// Abrir WhatsApp
		window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, '_blank');
	};
	return (
		<AnimatePresence>
			{abierto && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-999 bg-black/50"
					onClick={cerrar}
				>
					<motion.aside
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
						className="absolute top-0 right-0 w-full sm:w-[500px] h-full bg-[#2C2C2C] text-white shadow-2xl z-50 flex flex-col"
						onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del modal
					>
						{/* Encabezado */}
						<div className="bg-[#ED1B24] p-6 relative overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pizza.png')]"></div>
							<div className="flex justify-between items-center relative z-10">
								<h2 className="text-2xl font-bold text-white flex items-center gap-2">
									<span className="bg-[#FFCA03] text-[#1A1A1A] p-2 rounded-full">
										🍕
									</span>
									<span>Tu Pedido</span>
								</h2>
								<button
									onClick={cerrar}
									className="p-1 rounded-full hover:bg-black/10 transition-colors"
								>
									<X className="text-white" size={24} />
								</button>
							</div>
						</div>

						{/* Contenido */}
						<div className="flex-1 p-6 overflow-y-auto">
							{pedidos.length === 0 ? (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="flex flex-col items-center justify-center h-full text-center"
								>
									<div className="bg-[#1A1A1A] p-8 rounded-full mb-4 text-4xl">
										🛒
									</div>
									<h3 className="text-xl font-bold mb-2">¡Carrito vacío!</h3>
									<p className="text-gray-400 max-w-xs">
										Parece que aún no has añadido ninguna deliciosa pizza a tu pedido
									</p>
								</motion.div>
							) : (
								<div className="space-y-6">
									{pedidos.map((p) => (
										<motion.div
											key={p.id}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, x: 50 }}
											layout
											className="bg-[#1A1A1A] p-4 rounded-lg shadow-lg border-l-4 border-[#FFCA03]"
										>
											<div className="flex gap-4">
												<ItemImage imagen={p.imagen} nombre={p.nombre} />

												<div className="flex-1">
													<div className="flex justify-between items-start">
														<div>
															<h3 className="font-bold text-white">{p.nombre}</h3>
															{p.tamano && (
																<span className="text-xs bg-[#006A36] text-white px-2 py-1 rounded-full">
																	{tamanos.find(t => t.id === p.tamano)?.nombre || 'Tamaño'}
																</span>
															)}
														</div>
														<button
															onClick={() => eliminarPedido(p.id)}
															className="text-gray-400 hover:text-[#ED1B24] transition-colors p-1"
															title="Quitar"
														>
															<Trash2 size={18} />
														</button>
													</div>

													{p.descripcion && (
														<p className="text-sm text-gray-400 mt-2">
															{p.descripcion}
														</p>
													)}

													<div className="flex justify-between items-center mt-3">
														<div className="flex gap-2">
															{p.cantidad > 1 && (
																<span className="text-xs bg-[#2C2C2C] text-white px-2 py-1 rounded">
																	x{p.cantidad}
																</span>
															)}
														</div>
														<span className="text-lg font-bold text-[#FFCA03]">
															${p.precio.toLocaleString()}
														</span>
													</div>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							)}
						</div>

						{/* Pie de página con total y botones */}
						{pedidos.length > 0 && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="border-t border-[#1A1A1A] p-6 bg-[#2C2C2C]"
							>
								<div className="flex justify-between items-center mb-6">
									<span className="text-gray-400 text-lg">Total:</span>
									<span className="text-2xl font-bold text-[#FFCA03]">
										${total.toLocaleString()}
									</span>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<button
										onClick={limpiarPedidos}
										className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#ED1B24] text-white py-3 px-4 rounded-lg font-medium transition-colors"
									>
										<Trash2 size={16} />
										Vaciar
									</button>
									<button
										onClick={enviarWhatsApp}
										className="flex items-center justify-center gap-2 bg-[#006A36] hover:bg-[#008a47] text-white py-3 px-4 rounded-lg font-bold transition-colors group"
									>
										Enviar pedido
										<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
									</button>
								</div>
							</motion.div>
						)}
					</motion.aside>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
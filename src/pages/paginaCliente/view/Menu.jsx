import { useState } from 'react';
import { pizzas, categorias, tamanos } from "../../../backend/json/json";
import CategoriaFiltro from '../components/FiltroCategorias';
import { useNavigate } from 'react-router-dom';
import { RUTAS } from '../../../routes/router';
export default function Menu() {
	const [categoriaActiva, setCategoriaActiva] = useState(null);
	const navigate = useNavigate();


	const pizzasFiltradas = categoriaActiva
		? pizzas.filter(pizza => pizza.categoria_id === categoriaActiva)
		: pizzas;

	const getNombreCategoria = (id) => categorias.find(cat => cat.id === id)?.nombre || "";
	const getNombreTamano = (id) => tamanos.find(t => t.id === id)?.nombre || "";

	return (
		<section className="bg-[#2C2C2C] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold text-[#FFCA03] mb-4">Nuestro Menú</h1>
				<p className="text-xl text-gray-300">Selecciona tu pizza favorita</p>
			</div>

			<CategoriaFiltro
				categorias={categorias}
				categoriaActiva={categoriaActiva}
				setCategoriaActiva={setCategoriaActiva}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
				{pizzasFiltradas.map((pizza) => (
					<div key={pizza.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
						<div className="h-48 bg-gray-700 relative overflow-hidden group">
							{pizza.imagen ? (
								<img
									src={pizza.imagen}
									alt={pizza.nombre}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							) : (
								<div className="w-full h-full flex items-center justify-center text-gray-400">
									<span>{pizza.nombre}</span>
								</div>
							)}
							<span className="absolute top-4 right-4 bg-[#006A36] text-white text-sm font-bold px-3 py-1 rounded-full z-10">
								{getNombreCategoria(pizza.categoria_id)}
							</span>
						</div>

						<div className="p-6 flex flex-col flex-grow">
							<h3 className="text-xl font-bold text-white mb-2">{pizza.nombre}</h3>
							<p className="text-gray-300 mb-4">{pizza.descripcion}</p>

							<div className="flex-grow">
								{pizza.precios.map((precio) => (
									<div key={precio.tamano_id} className="flex justify-between">
										<span className="text-gray-400">{getNombreTamano(precio.tamano_id)}</span>
										<span className="text-[#FFCA03] font-bold">
											${precio.precio.toLocaleString()}
										</span>
									</div>
								))}
							</div>

							<button
								onClick={() =>
									navigate(
										RUTAS.PIZZA.DETALLES.replace(":id", pizza.id),
										{ state: pizza } 
									)
								}
								className="mt-6 w-full bg-[#ED1B24] hover:bg-[#FFCA03] text-white font-bold py-2 px-4 rounded-lg transition-colors"
							>
								Ver detalles
							</button>

						</div>
					</div>
				))}
			</div>
		</section>
	);
}

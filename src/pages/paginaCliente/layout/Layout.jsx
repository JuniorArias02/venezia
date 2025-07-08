import { useState } from 'react';
import Navigation from '../components/Navegation';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import CarritoCompras from '../components/CarritoCompras';

export default function Layout() {
	const [carritoAbierto, setCarritoAbierto] = useState(false);

	return (
		<div className="flex flex-col min-h-screen relative">
			<Navigation abrirCarrito={() => setCarritoAbierto(true)} />



			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />

			<CarritoCompras
				abierto={carritoAbierto}
				cerrar={() => setCarritoAbierto(false)}
			/>
		</div>
	);
}

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/paginaCliente/layout/Layout';
import Home from './pages/paginaCliente/view/Home';
import Menu from './pages/paginaCliente/view/Menu';
import SeleccionPizza from './pages/paginaCliente/view/SeleccionPizza';
import { RUTAS } from './routes/router';
import ScrollToTop from './pages/paginaCliente/hook/ScrollToTop';
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RUTAS.MENU} element={<Menu />} />
          <Route path={RUTAS.PIZZA.DETALLES} element={<SeleccionPizza />} />
          <Route path="*" element={<Home />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;

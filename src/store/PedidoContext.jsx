import { createContext, useContext, useEffect, useState } from 'react';

const PedidoContext = createContext();

export function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState(() => {
    // ✅ Cargar desde localStorage al iniciar
    const stored = localStorage.getItem("pedidos");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Guardar en localStorage cada vez que cambien los pedidos
  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  const agregarPedido = (pedido) => {
    setPedidos((prev) => [...prev, pedido]);
  };

  const eliminarPedido = (id) => {
    setPedidos((prev) => prev.filter(p => p.id !== id));
  };

  const limpiarPedidos = () => setPedidos([]);

  return (
    <PedidoContext.Provider value={{
      pedidos,
      agregarPedido,
      eliminarPedido,
      limpiarPedidos,
    }}>
      {children}
    </PedidoContext.Provider>
  );
}

export const usePedido = () => useContext(PedidoContext);

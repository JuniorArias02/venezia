import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './style/custom.css'
import { PedidoProvider } from './store/PedidoContext.jsx';
import { SedeProvider } from './store/SedeContexte.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SedeProvider>
        <PedidoProvider>
          <App />
        </PedidoProvider>
      </SedeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

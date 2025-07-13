const ROOT_PIZZA = "/pizza";
const ROOT_HAMBURGUESA ="/hamburguesa" 

export const RUTAS = {
  INICIO: "/inicio",
  MENU: "/menu",

  PIZZA: {
    ROOT: ROOT_PIZZA,
    DETALLES: `${ROOT_PIZZA}/:slug`,
  },

  HAMBURGUESA: {
    ROOT: ROOT_HAMBURGUESA,
    DETALLES: `${ROOT_HAMBURGUESA}/:slug`
  }

};

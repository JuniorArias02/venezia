const ROOT_PIZZA = "/pizza";

export const RUTAS = {
  INICIO: "/inicio",
  MENU: "/menu",

  PIZZA: {
    ROOT: ROOT_PIZZA,
    DETALLES: `${ROOT_PIZZA}/:id`, 
  },
};

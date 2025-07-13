export const categorias = [
	{ id: 1, nombre: "Gourmet" },
	{ id: 2, nombre: "Especiales" },
	{ id: 3, nombre: "Vegetariana" },
	{ id: 4, nombre: "Dolces" },
	{ id: 5, nombre: "Clásica" },
	{ id: 6, nombre: "Sugerencia" },
	{ id: 7, nombre: "Adicionales" },
	{ id: 8, nombre: "Hamburguesas" }
];

export const tamanos = [
	{ id: 1, nombre: "Bambino" },
	{ id: 2, nombre: "Pequeño" },
	{ id: 3, nombre: "Mediano" },
	{ id: 4, nombre: "Grande" }
];

export const tipos = [
	{ id: 1, nombre: "Pizza" },
	{ id: 2, nombre: "Hamburguesa" }
];


export const pizzas = [
	{
		id: 3,
		nombre: "Venezia",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/Venezia.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, pollo, maíz y tocino",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 4,
		nombre: "Capricciosa",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/caprichosa.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, champiñones, pimentón, anchoas y orégano",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 5,
		nombre: "Quattro Stagioni",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/Quatroestaggioni.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, champiñones, pimentón y aceitunas negras",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 6,
		nombre: "Especial",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/especial.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, champiñones, salami y anchoas",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 7,
		nombre: "Ranchera",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/ranchera.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, champiñones y pollo",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 8,
		nombre: "Al Formaggi",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/alformagli.jpg',
		descripcion: "Salsa bechamel y cuatro tipos de queso",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 9,
		nombre: "Bianca",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/Bianca.jpg',
		descripcion: "Salsa bechamel, queso mozzarella, tocino, champiñones y cebolla",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 10,
		nombre: "Mostaza y Miel",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/moztasa y miel.jpg',
		descripcion: "Salsa, queso mozzarella, tocino, jamón, mostaza y miel",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 11,
		nombre: "Bologna",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/bologña.jpg',
		descripcion: "Salsa, queso mozzarella, jamón, pimentón y carne molida",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 38000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 12,
		nombre: "Mexicana",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/mexicana.jpg',
		descripcion: "Salsa, queso mozzarella, pimentón, carne molida, tabasco, jalapeños, chorizo y nachos",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 38000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 13,
		nombre: "Mediterránea",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '/pizzas/mediterranea.jpg',
		descripcion: "Salsa, queso mozzarella, pimentón, jamón y frutos del mar",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 14,
		nombre: "Del Cesar",
		categoria_id: 1,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, trocitos de tomate y jamón serrano",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 35000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 15,
		nombre: "Primavera",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '/pizzas/primavera.jpg',
		descripcion: "Salsa, queso mozzarella, tocino y maíz",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 29000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 44000 }
		]
	},
	{
		id: 16,
		nombre: "Campesina",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '/pizzas/campesina.jpg',
		descripcion: "Salsa, queso mozzarella, jamón y pollo",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 29000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 44000 }
		]
	},
	{
		id: 17,
		nombre: "Rutigliano",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, jamón y salami",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 43000 }
		]
	},
	{
		id: 18,
		nombre: "Club",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, jamón y champiñones",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 43000 }
		]
	},
	{
		id: 19,
		nombre: "Capresa",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '/pizzas/capresa.jpg',
		descripcion: "Salsa, queso mozzarella, trocitos de tomate y pesto",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 33000 },
			{ tamano_id: 4, precio: 43000 }
		]
	},
	{
		id: 20,
		nombre: "Cipolla",
		categoria_id: 2,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, cebolla y anchoas",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 43000 }
		]
	},
	{
		id: 21,
		nombre: "Vegetali",
		categoria_id: 3,
		tipo_id: 1,
		imagen: '/pizzas/Vegetariana.jpg',
		descripcion: "Salsa, queso mozzarella, cebolla y vegetales mixtos",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 35000 },
			{ tamano_id: 4, precio: 43000 },
		]
	},
	{
		id: 22,
		nombre: "Granjera",
		categoria_id: 3,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, anchoas, cebolla, vegetales mixtos, jamón y champiñones",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 38000 },
			{ tamano_id: 4, precio: 50000 },
		]
	},
	{
		id: 23,
		nombre: "Del Nonno",
		categoria_id: 3,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella, cebolla, champiñones, trocitos de tomate y aceite de oliva",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 38000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 24,
		nombre: "Veganna",
		categoria_id: 3,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, poco queso mozzarella, cebolla, pimentón y aceitunas negras",
		precios: [
			{ tamano_id: 1, precio: 16000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 38000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 25,
		nombre: "Dolce",
		categoria_id: 4,
		tipo_id: 1,
		imagen: '/pizzas/dolce.jpg',
		descripcion: "Queso mozzarella y bocadillo",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 33000 },
			{ tamano_id: 4, precio: 42000 }
		]
	},
	{
		id: 26,
		nombre: "Hawaiana",
		categoria_id: 4,
		tipo_id: 1,
		imagen: '/pizzas/hawaiana.jpg',
		descripcion: "Queso mozzarella, salsa, jamón y piña caramelizada",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 28000 },
			{ tamano_id: 3, precio: 33000 },
			{ tamano_id: 4, precio: 45000 }
		]
	},
	{
		id: 27,
		nombre: "Dolce Vita",
		categoria_id: 4,
		tipo_id: 1,
		imagen: '/pizzas/dolce_vita.jpg',
		descripcion: "Queso mozzarella, salsa, piña, cereza y ciruela",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 29000 },
			{ tamano_id: 3, precio: 33000 },
			{ tamano_id: 4, precio: 45000 }
		]
	},
	{
		id: 28,
		nombre: "Samba",
		categoria_id: 4,
		tipo_id: 1,
		imagen: '/pizzas/samba.jpg',
		descripcion: "Nutella, queso y caramelos",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 29000 },
			{ tamano_id: 3, precio: 33000 },
			{ tamano_id: 4, precio: 45000 }
		]
	},
	{
		id: 29,
		nombre: "Prosciutto",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa, queso mozzarella y jamón",
		precios: [
			{ tamano_id: 1, precio: 13000 },
			{ tamano_id: 2, precio: 26000 },
			{ tamano_id: 3, precio: 31000 },
			{ tamano_id: 4, precio: 39000 }
		]
	},
	{
		id: 30,
		nombre: "Pimentón",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '/pizzas/pimenton.jpg',
		descripcion: "Salsa, queso mozzarella y pimentón",
		precios: [
			{ tamano_id: 1, precio: 13000 },
			{ tamano_id: 2, precio: 26000 },
			{ tamano_id: 3, precio: 31000 },
			{ tamano_id: 4, precio: 39000 }
		]
	},
	{
		id: 31,
		nombre: "Margarita",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa y queso mozzarella",
		precios: [
			{ tamano_id: 1, precio: 13000 },
			{ tamano_id: 2, precio: 26000 },
			{ tamano_id: 3, precio: 30000 },
			{ tamano_id: 4, precio: 38000 }
		]
	},
	{
		id: 32,
		nombre: "Napolitana",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa y queso mozzarella, anchoas y orégano",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 27000 },
			{ tamano_id: 3, precio: 34000 },
			{ tamano_id: 4, precio: 45000 }
		]
	},
	{
		id: 33,
		nombre: "Chori Frito",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '/pizzas/chorifrito.jpg',
		descripcion: "Salsa y queso mozzarella con chori frito",
		precios: [
			{ tamano_id: 1, precio: 14000 },
			{ tamano_id: 2, precio: 26000 },
			{ tamano_id: 3, precio: 31000 },
			{ tamano_id: 4, precio: 39000 }
		]
	},
	{
		id: 34,
		nombre: "Pepperoni",
		categoria_id: 5,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa y queso mozzarella con pepperoni",
		precios: [
			{ tamano_id: 1, precio: 13000 },
			{ tamano_id: 2, precio: 26000 },
			{ tamano_id: 3, precio: 31000 },
			{ tamano_id: 4, precio: 39000 }
		]
	},
	{
		id: 35,
		nombre: "Pizza Campañola",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/campañola.jpg',
		descripcion: "Salsa y queso mozzarella, salami, rodajas de tomate y anchoas",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 36,
		nombre: "Pizza Rancho",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/rancho.jpg',
		descripcion: "Salsa y queso mozzarella, jamón, maíz, champiñones y tocino",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 30000 },
			{ tamano_id: 3, precio: 36000 },
			{ tamano_id: 4, precio: 50000 }
		]
	},
	{
		id: 37,
		nombre: "La Peluda",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/pelua.jpg',
		descripcion: "Salsa y queso mozzarella, carne mechada y queso amarillo",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 38,
		nombre: "Camarones al Ajillo",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/Camarones_al_ajillo.jpg',
		descripcion: "Salsa y queso mozzarella, jamón y camarones al ajillo",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 39,
		nombre: "Embutidos",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa y queso mozzarella, jamón, tocino, salami y chori frito",
		precios: [
			{ tamano_id: 1, precio: 18000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 40,
		nombre: "Pizza Parrilla",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/pizza_parrilla.jpg',
		descripcion: "Salsa y queso mozzarella, jamón, pollo, carne, chorizo, cebolla y pimentón",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 41,
		nombre: "Campestre",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/campestre.jpg',
		descripcion: "Salsa y queso mozzarella, jamón, pollo, chori frito y tocino",
		precios: [
			{ tamano_id: 1, precio: 19000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 42,
		nombre: "Pizza Barbichona",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/pizza_barbichona.jpg',
		descripcion: "Salsa y queso mozzarella, jamón, trozos de cochino en salsa BBQ, cebolla y maíz",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 43,
		nombre: "Pizza Pollo D Mari",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '/pizzas/pollo_d_mari.jpg',
		descripcion: "Salsa y queso mozzarella, jamón, pollo y camarones",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	},
	{
		id: 44,
		nombre: "Pizza Siciliana",
		categoria_id: 6,
		tipo_id: 1,
		imagen: '',
		descripcion: "Salsa y queso mozzarella, jamón, carne molida y tocino",
		precios: [
			{ tamano_id: 1, precio: 20000 },
			{ tamano_id: 2, precio: 34000 },
			{ tamano_id: 3, precio: 40000 },
			{ tamano_id: 4, precio: 55000 }
		]
	}
];

export const sedes = [
	{
		id: 1,
		barrio: "San Miguel",
		direccion: "Calle 9 entre avenida 16 y 17",
		telefono: "+57 312 5728165",

	},
	{
		id: 2,
		barrio: "Torcoroma",
		direccion: "av17 mz 012 lote 11 torcoroma 2",
		telefono: "+57 310 4229285",

	},
	{
		id: 3,
		barrio: "Prados del Este",
		direccion: "av8 #6-120 mz 52",
		telefono: "+ 57 313 3237835",

	},
]

export const hamburguesas = [
  {
    id: 1,
    nombre: "Croqueta de res o cerdo",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, cebolla, tomate, lechuga y huevo.",
    precio: 10000
  },
  {
    id: 2,
    nombre: "Delicia di Pollo",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, cebolla, tomate, lechuga, carne, tocineta, huevo y papa.",
    precio: 12000
  },
  {
    id: 3,
    nombre: "Delizia de Carne",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, cebolla, tomate, lechuga, carne mechada, huevo y tocineta.",
    precio: 13000
  },
  {
    id: 4,
    nombre: "Mixta",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, huevo, carne mechada, pollo, cebolla, tomate, lechuga y tocineta.",
    precio: 18000
  },
  {
    id: 5,
    nombre: "Chuleta o Tritare",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, chuleta ahumada, cebolla, tomate, lechuga, huevo y tocineta.",
    precio: 18000
  },
  {
    id: 6,
    nombre: "Venezia Súper",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, chuleta ahumada, pollo, carne mechada, tomate, cebolla, lechuga, huevo y tocineta.",
    precio: 22000
  },
  {
    id: 7,
    nombre: "Milanesa",
    categoria_id: 8,
    tipo_id: 2,
    imagen: "",
    descripcion: "Jamón, queso, milanesa de pollo, cebolla, tomate, tocineta y salsa.",
    precio: 16000
  }
];



// colore de la web
// #2C2C2C  #006A36 #ED1B24  #FFCA03 
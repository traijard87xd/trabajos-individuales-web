const datos = [
  {
    id: 1,
    nombre: "Espresso",
    categoria: "Café caliente",
    precio: 45,
    stock: 40,
    descuento: 0,
  },
  {
    id: 2,
    nombre: "Frapuchino de moka",
    categoria: "Frappé",
    precio: 85,
    stock: 25,
    descuento: 10,
  },
  { id: 3, nombre: "Matcha latte", categoria: "Matcha", precio: 75, stock: 0 },
  {
    id: 4,
    nombre: "Capuchino",
    categoria: "Café caliente",
    precio: 60,
    stock: 30,
    descuento: 5,
  },
  {
    id: 5,
    nombre: "Matcha frappé",
    categoria: "Frappé",
    precio: 90,
    stock: 15,
  },
  {
    id: 6,
    nombre: "Latte vainilla",
    categoria: "Café caliente",
    precio: 65,
    stock: 20,
  },
];

// 1. Lista filtrada: bebidas disponibles (con stock) de precio mayor o igual a 60
// (desestructuración en los parámetros)
const filtrados = datos.filter(
  ({ stock, precio }) => stock > 0 && precio >= 60,
);

// 2. Total del campo numérico "precio"
// (?. y ?? por si algún producto viniera sin precio)
const total = datos.reduce((acc, bebida) => acc + (bebida?.precio ?? 0), 0);

// 3. Promedio del precio
const promedio = total / datos.length;

// 4. Lista ordenada por precio (menor a mayor)
// (spread para copiar el arreglo y no mutar el original)
const ordenados = [...datos].sort((a, b) => a.precio - b.precio);

console.log({ filtrados, total, promedio, ordenados });

// Verificación de que el original NO se mutó
console.log("Original:", datos);

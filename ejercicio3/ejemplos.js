//ejemplo 1
function crearContadorPedidos() {
  let pedidos = 0; // variable "recordada" por el closure

  return function () {
    pedidos++;
    return pedidos;
  };
}

const contadorCaja1 = crearContadorPedidos();
const contadorCaja2 = crearContadorPedidos();

console.log(contadorCaja1()); // 1
console.log(contadorCaja1()); // 2
console.log(contadorCaja2()); // 1 (cada caja tiene su propio contador)

//ejemplo 2
function crearDescuento(porcentaje) {
  return (precio) => precio - precio * (porcentaje / 100);
}

const descuentoEstudiante = crearDescuento(10);
const descuentoEmpleado = crearDescuento(25);

console.log(descuentoEstudiante(85)); // 76.5
console.log(descuentoEmpleado(85)); // 63.75

//ejemplo 3
const cafeteria = {
  nombre: "Café Luna",
  saludarNormal: function () {
    return `Bienvenido a ${this.nombre}`;
  },
  saludarFlecha: () => {
    return `Bienvenido a ${this.nombre}`;
  },
};

console.log(cafeteria.saludarNormal()); // Bienvenido a Café Luna
console.log(cafeteria.saludarFlecha()); // Bienvenido a undefined

//ejemplo 3.1
const pedido = {
  cliente: "Ana",
  bebidas: ["Espresso", "Matcha latte"],
  mostrar() {
    this.bebidas.forEach((bebida) => {
      console.log(`${this.cliente} pidió ${bebida}`);
    });
  },
};

pedido.mostrar();

//ejemplo 4
class Bebida {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  descripcion() {
    return `${this.nombre} cuesta $${this.precio}`;
  }
}

class BebidaFria extends Bebida {
  constructor(nombre, precio, tamano) {
    super(nombre, precio); // llama al constructor de Bebida
    this.tamano = tamano;
  }

  descripcion() {
    return `${super.descripcion()} - tamaño ${this.tamano}`;
  }
}

const espresso = new Bebida("Espresso", 45);
const frapuchino = new BebidaFria("Frapuchino", 85, "grande");

console.log(espresso.descripcion());
console.log(frapuchino.descripcion());

//ejemplo 5
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this._precio = precio; // el guion bajo es solo una convención
  }

  get precio() {
    return this._precio;
  }

  set precio(valor) {
    if (valor < 0) {
      console.log("El precio no puede ser negativo");
      return;
    }
    this._precio = valor;
  }

  get precioConIva() {
    return (this._precio * 1.16).toFixed(2);
  }
}

const latte = new Producto("Latte", 65);
console.log(latte.precioConIva); // se usa sin paréntesis
latte.precio = -10; // el setter lo rechaza
latte.precio = 70; // el setter lo acepta
console.log(latte.precio);

//ejemplo 6
class CuentaCaja {
  #total = 0; // campo privado

  agregarVenta(monto) {
    this.#total += monto;
  }

  get total() {
    return this.#total;
  }
}

const caja = new CuentaCaja();
caja.agregarVenta(45);
caja.agregarVenta(85);

console.log(caja.total); // 130 (se lee mediante el getter)

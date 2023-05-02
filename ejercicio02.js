class Producto {
  constructor(nombre, precio, cantidad, descuento) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.descuento = descuento;
  }

  calcularPrecioTotal() {
    return this.precio * this.cantidad;
  }

  calcularDescuento() {
    return this.precio * (1 - this.descuento / 100);
  }
}

const productos = [
  new Producto("Poleron", 25000, 1, 15),
  new Producto("Zapatillas", 50000, 1, 15),
  new Producto("Polera", 15000, 2, 20)
];

const precioTotal = productos.reduce((total, producto) => {
  return total + producto.calcularPrecioTotal();
}, 0);

const precioTotalConDescuento = productos.reduce((total, producto) => {
  return total + producto.calcularDescuento() * producto.cantidad;
}, 0);

console.log(`Precio total: ${precioTotal}`);
console.log(`Precio total con descuento: ${precioTotalConDescuento}`);
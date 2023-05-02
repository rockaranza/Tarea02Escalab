class Vehiculo {
  constructor(marca, modelo, año, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
  }

  porMarca(marca) {
    return vehiculos.filter(v => v.marca === marca);
  }

  porModelo(modelo) {
    return vehiculos.filter(v => v.modelo === modelo);
  }

  porAño(año) {
    return vehiculos.filter(v => v.año === año);
  }

  ordenarPrecio() {
    return vehiculos.sort((a, b) => a.precio - b.precio);
  }
}

const vehiculos = [
  new Vehiculo("Toyota", "Yaris", 2023, 13490000),
  new Vehiculo("Mitsubishi", "Outlander", 2019, 14490000),
  new Vehiculo("Nissan", "March", 2021, 7690000),
  new Vehiculo("Toyota", "Hylux", 2023, 24890000)
];

console.log("Vehículos de marca Toyota:");
console.log(new Vehiculo().porMarca("Toyota"));

console.log("Vehículos modelo Hylux:");
console.log(new Vehiculo().porModelo("Hylux"));

console.log("Vehículos del año 2019:");
console.log(new Vehiculo().porAño(2019));

console.log("Vehículos ordenados por precio de menor a mayor:");
console.log(new Vehiculo().ordenarPrecio());
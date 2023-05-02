class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  filtroGenero(genero) {
    return this.genero === genero;
  }

  ordenarEdad() {
    return (a, b) => a.edad - b.edad;
  }
}

const personas = [
  new Persona("Alexa", 18, "Femenino"),
  new Persona("Juan", 25, "Masculino"),
  new Persona("Cristina", 43, "Femenino"),
  new Persona("Manuel", 25, "Masculino"),
  new Persona("Karen", 37, "Femenino")
];

const personasMasculino = personas.filter(persona => persona.filtroGenero("Masculino"));

const personasPorEdad = personas.sort(persona => persona.ordenarEdad());

console.log("Personas filtradas por género Masculino:");
console.log(personasMasculino);
console.log("Personas ordenadas por edad:");
console.log(personasPorEdad);
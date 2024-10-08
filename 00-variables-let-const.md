```javascript 
console.log("Bienvenido!");
// la palabra reservada let, sirve para inicializar una variable, por ejemplo cont, 
//y nos permite REASIGNARLE un valor, asimismo, inicializarla undefined

let contador = 0;
contador = contador + 1;
contador = contador + 1;
contador = contador + 1;

console.log(contador);

//a diferencia de const, esta NO NOS PRMITE REASIGNARLE UN VALOR, 
//la variable reventaría, no se puede ni cambiar el tipo de valor, ni cambiar, ni asignar
const conta = 0;
conta = conta + 1;
conta = conta + 1;

console.log(conta);


//pero comparten que no permiten declarar dos veces la misma variable.
// const cont = 0;
const cont = 0;

//qué pasa si nosotros hacemos un scope, un ambiente, un ámbito?, 
//el ámbito siempre va a buscar la variable más cercana para dar el resultado, 
//y si no existiera sigue buscando, desde adentro hacia afuera sí podemos acceder, 
//pero caso contrario no
if (true) {
  const cont = 100;
  console.log(cont);
}

//con var si se puede accedre, porque queda global pero no es ventaja sino al contrario

//podemos trabajar con objetos
const persona = {
  nombre: "Nestor",
  apellido: "Rivas"
}
//no podemos cambiar tipo de estas, pero sí podemos esntrar a sus propiedades y modificar
//persona = "string"
persona.nombre = "Staenly";
console.log(persona);
console.log(persona.nombre);
```

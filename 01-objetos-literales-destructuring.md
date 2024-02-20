## Objetos literales y Optional chaining operator
```javascript
const frutas = ["pera", "manzana"];
console.log(frutas[1]);
//para poder acceder a un valor tenemos que colocar el indice


//objetos literales, no indexados
const animal = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true
}
// de alguna forma debemos acceder a los valores de este array
console.log(animal.color);
console.log(animal.nombre);

//también podemos acceder por medio de un corchete, aunque no sean indexados pero sirven para acceder a propiedades dinámicas 
console.log(animal["rugiendo"]);

//por ejemplo en firebase, podemos tener una lista de "ToDoes", donde tenga el id correspondiente, y este cuente con otro objeto
//aquí tengo un objeto, que el nombre de propiedad será un indice, el cual será otro objeto y tendrá muchas propiedades, y se puede replicar
const todos = {
    "2359-9lk8274": {
        title: "todo #01"
    }
}

//cómo accedemos?
//console.log(todos.2359-9lk8274); aquí vscode tira error porque hay caracteres no válidos, entonces usamos la técnica del corchete
console.log(todos["2359-9lk8274"].title);
//no es común utilizar corchetes pero más de alguna vez, nos tocará

//también pueden existir otras propiedades dentro de las propiedades
const animal = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true,
    favoritos: {
        dia: {
            ok: false,
        },
        noche: {
            ok: true,
        },
    },
}

console.log(animal.favoritos.noche.ok);
//qué pasa cuando no existe una propiedad?, tenemos el Optional Chaining Operator
//nosotros podríamos ir diciendo "si no existe esa propiedad, entonces quédate ahí y damos undefined", esto nos permite evaluar antes de llamar al valor correspondiente siempre que exista, y no se nos reviente el sistema
console.log(animal.favoritos?.luna?.ok);
//esto se usa cuando tenemos propiedades anidados, porque si algo no existe a nivel raíz, simplemente dará undefined
```

## Desturcturing
```javascript
//objetos
//si quisieramos guardar ese color en una constante, lo haríamos así
const color = animal.color;
//si quisieramos guardar ese nombre en una constante, lo haríamos así
const nombre = animal.nombre;

console.log(color);
console.log(nombre);

const animal = {
    color: "azul",
    nombre: "Torogoz",
    volando: true
}

//hay una alternativa para hacer esto mucho más cómoda
//el destructuring se puede hacer tanto de array como de objetos
//llamamos const y como es un objeto abrimos llavesitas y luego el nombre del objeto literal en este caso "animal"
const {color, nombre, trabajando} = animal;
//con esto acabamos de crear tres variables sin necesidad de estar llamando con el punto a cada propiedad, ahora podemos pintar cada una de esas variables
console.log(color);
//aunque no necesitamos llamar todo, sólo a lo que vamos a desestructurar

//podemos hacerlo para los arrays indexados
const frutas = ["pera", "manzana"];
//muy importante el orden, si queremos inicializar cada uno debemos respetar el orden, y así escribir los nombres de las variables
const [pera, manzana] = frutas;
console.log(pera);

//cuando hacemos el destructuring de un array, tenemos que preocuparnos por los indices, y cuando es de objetos, lo importante es el nombre de la propiedad
```
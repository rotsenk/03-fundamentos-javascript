## Este espacio será para los contenidos de Promesas, then catch, async await, fetch API y JSON

> Qué pasaría si el array de "albums" lo llevamos a la carpeta public? simulando que queremos hacer un consumo HTTP, o sea que el array venga de una bd o una api sencilla
- JSON aunque se parezca mucho a JS es un string, recordemos!
- // las reglas de JSON es que todos los nombres de propiedades deben ir en comillas dobles y también todos los strings, entonces debemos transformar ese array

```javascript
const app = document.getElementById('app');
//Consumiremos una promesa con then catch y await y además veremos el concepto de api fetch
//vamos a simular que todo viene de una bd
//si queremos leer en JSON, tenemos una api que se llama FETCH, recibe cualquier url y nos devuelve un json, esto se llama api

//si nosotros vemos este ejemplo, js va leyendo los elementos de arriba hacia abajo
console.log(1);
console.log(fetch("data.json"));
console.log(2);

//caso de las promesas, es que es un mundo paralelo y consume las promesas independientemente los segundos que se demore, pero el código siempre se consume hacia abajo, y una vez se obtenga la respuesta, nos la va a traer


console.log(1);
//para consimir la promesa es utilizar el then, y este recibe una función de callback
fetch("data.json")
  .then((res) => {
    console.log(res.json());
  });
console.log(2);
//entonces, lo que hace js, es NO esperar a que se cumpla la promesa, sino que está leyendo el console.log(1), luego empieza a consumir esa promesa, y como es en un mundo paralelo, sigue consumiendo el console.log(2) y así sucesivamente, y una vez esa promesa se resuelve, llega una respuesta positova o negativa volvemos a nuestro universo actual, y pintamos el console correspondiente.
```

```javascript
const app = document.getElementById("app");

 fetch("data.json").then((res) => {
   res.json().then((data) => {
     console.log(data);
   });
 });

//cuando tenemos muchos then, podemos reorganizar nuestra función, colocando otra promesa que retorne otra promesa
fetch("data.json")
.then((res) => {
  if (!res.ok) {
    //throw new Error("Error 404");//este throw hace que salte directamente al catch, sirve para validaciones
    throw { ok: false, msg: "Error 404"};
  }
  return res.json();
})
.then((data) => console.log(data))
.catch((err) => console.log(err.message));//podemos hacer catch por si esto falla en algún proceso del consumo de la promesa
```

## Mostrar datos en pantalla con el diseño, y colocar spinner
```javascript
const app = document.getElementById("app");

//hacer este spinner después de finally
const spinner = document.getElementById("spinner");
spinner.innerHTML = `
<div class="spinner-grow" role="status">
<span class="visually-hidden">Loading...</span>
</div>
`

fetch("data.json")
  .then((res) => {
    if (!res.ok) {
      throw { ok: false, msg: "Error 404" };
    }
    return res.json();
  })
  .then((data) => {
    //una vez que tenemos la data, hacemos el proceso de llamar a las cards
    data.forEach((item) => {
      //console.log(item);//aquí podemos ver que los trae uno a uno
      app.innerHTML += Card(item);
      //el foreach recibe una función de callback, pintamos el item en cada iteración
      //el foreach se detiene cuando termina el consumo del array
    });
  })
  .catch((err) => console.log(err.message))
  .finally(() => /*console.log("finally")*/ (spinner.innerHTML=""));//finally, independientemente la promesa falla o se cumple correctamente, vamos a tener siempre esta acción
//nos sirve mucho para hacer un spinner

const btnClass = (stock) => {
  return stock > 0 ? "btn-primary" : "btn-danger disabled";
}

function Card(albums) {
  console.log(albums);
  const { album, artista, genero, stock } = albums;
  return `
    <div class="card mb-2">
    <div class="card-body">
      <h5 class="card-title">${album}</h5>
      <p class="card-text">${artista} - ${genero}</p>
      <a href="#" class="btn ${btnClass(stock)}">Buy</a>
    </div>
  </div>
  `
}

```
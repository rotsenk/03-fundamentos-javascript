## Interpolación, Operador ternario
```javascript
const app = document.getElementById('app');
//no es la mejor manera pasar por innerHTMl, pero a base de ejemplo me sirve porque es la manera en que se trabaja con react
//nosotros, siempre haremos componentes en nuestro sitio, es decir pedacitos de código para que puedan ser reutilizados
app.innerHTML = "hello world";

//para reutilizar cosas en js usamos functions
 function Card() {
     return "<p>hello world</p>";
 }

 app.innerHTML = Card();
 app.innerHTML += Card();
 app.innerHTML += Card();
//el signo "+" hace que se le pegue lo que está a la izquierda, en la 

function Card() {
    return `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
}

app.innerHTML = Card();

//ahora, cómo podemos hacer que esto reciba info dinámica
//que reciba información distinta y que nuestra card pueda responder a ello?
//nosotros podemos tener una colección de objetos, y esta colección tendrá propiedades
const albums = [
    {
        album: "Let Go",
        artista: "Avril Lavigne",
        genero: "punk",
    },
    {
        album: "This Is Why",
        artista: "Paramore",
        genero: "alternative rock",
    },
    {
        album: "Fallen",
        artista: "Evanescence",
        genero: "rock gótico",
    },
    {
        album: "The Quantum Enigma",
        artista: "Epica",
        genero: "metal sinfónico",
    },
]

//supongamos que queremos llamar a cada una de las propiedades de los objetos, lo haríamos así:
const albumOne = music[0];
const albumTwo = music[1];
//tendríamos que utilizar el indice, lo que no nos es factible porque si tuvieramos 100, eso sería caótico, entonces aquí es donde entra "destructuring"
```

## Destructurando
```javascript
//Usando DESTRUCTURING
const albums = [
    {
        album: "Let Go",
        artista: "Avril Lavigne",
        genero: "punk",
        stock: 90,
    },
    {
        album: "This Is Why",
        artista: "Paramore",
        genero: "alternative rock",
        stock: 80,
    },
    {
        album: "Fallen",
        artista: "Evanescence",
        genero: "rock gótico",
        stock: 0,
    },
    {
        album: "The Quantum Enigma",
        artista: "Epica",
        genero: "metal sinfónico",
        stock: 70,
    },
]

//aprendimos que podemos desestructurar, y se los podemos mandar como argumentos a las funciones
//el operador ternario es un if expresado
const [albumOne, albumTwo, albumThree, albumFour] = albums;

function Card(albums) {
    console.log(albums);
    //podemos hacer la desestructuración aquí adentro, llamando las propiedades
    //o también directamente como parametros de la función
    const { album, artista, genero, stock } = albums;
    //cómo reemplazamos la infor en el card?
    //simplemente usamos lo que se llama "interpolación" ${} y dentro esto recibe un JS expresado, en este caso, las variables destructuradas
    return `
    <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">${album}</h5>
      <p class="card-text">${artista} - ${genero}</p>
      <a href="#" class="btn ${
        stock > 0 ? "btn-primary" : "btn-danger disabled"
      }">Buy</a>
    </div>
  </div>
  `
}

//pasar el valor, es como que yo tome el objeto y se lo pase a la función, ese valor caso de desestructurarse, se convierte en parametro y ese parametro viaja con la info hacia donde la colocamos
app.innerHTML = Card(albumOne);//aquí le pasamos el valor
app.innerHTML += Card(albumTwo);
app.innerHTML += Card(albumThree);
app.innerHTML += Card(albumFour);
```

## Arrow function
```javascript
const albums = [
    {
        album: "Let Go",
        artista: "Avril Lavigne",
        genero: "punk",
        stock: 90,
    },
    {
        album: "This Is Why",
        artista: "Paramore",
        genero: "alternative rock",
        stock: 80,
    },
    {
        album: "Fallen",
        artista: "Evanescence",
        genero: "rock gótico",
        stock: 0,
    },
    {
        album: "The Quantum Enigma",
        artista: "Epica",
        genero: "metal sinfónico",
        stock: 70,
    },
]

const [albumOne, albumTwo, albumThree, albumFour] = albums;

//trabajando con arrow function
const  btnClass = (stock) => {
  return stock > 0 ? "btn-primary" : "btn-danger disabled";
}

function Card(albums) {
    console.log(albums);
    //podemos hacer la desestructuración aquí adentro, llamando las propiedades
    //o también directamente como parametros de la función
    const { album, artista, genero, stock } = albums;
    //cómo reemplazamos la infor en el card?
    //simplemente usamos lo que se llama "interpolación" ${} y dentro esto recibe un JS expresado, en este caso, las variables destructuradas
    return `
    <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">${album}</h5>
      <p class="card-text">${artista} - ${genero}</p>
      <a href="#" class="btn ${
        btnClass(stock)//aquí la llamada a la función
      }">Buy</a>
    </div>
  </div>
  `
}

//pasar el valor, es como que yo tome el objeto y se lo pase a la función, ese valor caso de desestructurarse, se convierte en parametro y ese parametro viaja con la info hacia donde la colocamos
app.innerHTML = Card(albumOne);//aquí le pasamos el valor
app.innerHTML += Card(albumTwo);
app.innerHTML += Card(albumThree);
app.innerHTML += Card(albumFour);
```
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
const app = document.getElementById("app");
//ahora, construremos nuestras propias promesas
//el new Promise, recibe un callback con dos parámetros que son resolve y reject, el resolve es el que resuelve, y el reject es el que falla, es decir, el que estaría saltando al catch

const spinner = document.getElementById("spinner");
spinner.innerHTML = `
<div class="spinner-grow" role="status">
<span class="visually-hidden">Loading...</span>
</div>
`
//construiremos la promesa aquí
const fakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
});

const getAlbums = async () => {
  try {
    //llevémoslo acá adentro
    const hola = await fakePromise;//aquí consumismo la promesa que creamos
    console.log(hola);//aquí pintamos en pantalla de consola el mensaje 

    const res = await fetch("data.json");

    if (!res.ok) {
      throw {ok: false, msg: "error 404"};
    }

    const data = await res.json();

    data.forEach(item => {
      app.innerHTML += Card(item);
    });
    
  } catch (error) {
    console.log(error);
  } finally {
    spinner.innerHTML = "";
  }
}
getAlbums();

const btnClass = (stock) => {
  return stock > 0 ? "btn-primary" : "btn-danger disabled";
}

function Card(albums) {
  //console.log(albums);
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

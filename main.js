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

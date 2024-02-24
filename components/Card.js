export default function Card(albums) {
  const btnClass = (stock) => {
    return stock > 0 ? "btn-primary" : "btn-danger disabled";
  }

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

//pero qué pasaría si yo exporto otra función por defecto?
// export default function Hello(){
//   return 'Hello!'
// }
//el navegador explota porque la regla de las exportación por default es que sólo debe existir UNA POR ARCHIVO, por eso se llaman así.
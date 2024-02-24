## Utilizando async y await
```javascript
//ahora realizaremos lo mismo que hicimos anteriormente, pero usando async y await.
const getAlbums = async() => {
  //haremos una constante de la respuesta de fetch
  //fetch como es una promesa, necesitabamos consumirla con then, pero ahora no será necesario porque existe una palabra mágica que se va a llamar await
  const res = await fetch("data.json");
  //await será el consumo de la promesa, y lo que devuelva esa promesa lo va a almacenar en la variable res
  const data = await res.json();
  console.log(data);
 //await sólo puede vivir en este scope, siempre y cuando la función sea async 
 //el await dice "espérate" que este fetch se consuma, y una ves se consuma, almacenalo en la variable res, y luego ese método lo transforme en algo que entienda JS

}//en esta parte nosotros estamos en el primer then de la promesa anterior
getAlbums();

```


## Utilizando Async Await
```javascript
const app = document.getElementById("app");
const spinner = document.getElementById("spinner");
spinner.innerHTML = `
<div class="spinner-grow" role="status">
<span class="visually-hidden">Loading...</span>
</div>
`
//ahora, tenemos que manejar los errores, y el finally
const getAlbums = async () => {
  try {
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

## Creando Promesas creadas por nosotros
```javascript
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

```
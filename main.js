import Card from "./components/Card.js";
import { app, spinner } from "./components/Elements.js";
import fakePromise from "./components/fakePromise.js";

spinner.innerHTML = `
<div class="spinner-grow" role="status">
<span class="visually-hidden">Loading...</span>
</div>
`



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





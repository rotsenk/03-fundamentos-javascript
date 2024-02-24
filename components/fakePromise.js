//no podemos exportar por defecto alguna asignación, entonces se debe reestructurar la función
//pero abajo de la función, sí podemos hacer una exportación por defecto

const fakePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});

export default fakePromise;
## Trabajando con Módulos
>pedazos de nuestro main.js puedan viajar a archivos separados, debido a que el código se puede hacer muy extenso, por lo tanto, la mejor práctica es modularizar, exportar e importar módulos.
- Recordatorio: estamos imitando a cómo funciona React, por eso utilizamos innerHTML, porque estamos previo a iniciar a trabajar con React
- Creamos un directorio llamado components
- Movamos la porción de código de Card, a un archivo Card.js en el directorio components
- Importaremos Card en el main, y a Card le colocamos export por default
- Nos llevaremos los elementos app y spinner a un archivo separado
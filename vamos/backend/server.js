#!/usr/bin/env node

/**
 * Module dependencies.
 */
require("dotenv").config(); // Carga las variables de entorno definidas en un archivo .env en el entorno de Node.js
var app = require("../app"); // Importa el módulo app desde un archivo llamado app.js ubicado en el directorio superior al actual. Este archivo generalmente contiene la configuración y las rutas de la aplicación Express.
var debug = require("debug")("backend:server"); // Importa el módulo debug y lo inicializa con el nombre "backend:server". Se utiliza para imprimir mensajes de depuración en la consola durante la ejecución del servidor.
var http = require("http"); // Importa el módulo http de Node.js, que proporciona funcionalidades para crear un servidor HTTP.

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || "3000"); // Obtiene el valor del puerto de la variable de entorno PORT, o utiliza el valor predeterminado "3000" si no está definido. La función normalizePort se utiliza para convertir el valor del puerto en un número o una cadena.
app.set("port", port); // Establece la propiedad "port" en el objeto app de Express, para almacenar el número del puerto en el que se ejecutará el servidor.

/**
 * Create HTTP server.
 */
var server = http.createServer(app); // Crea un servidor HTTP utilizando la función createServer del módulo http, pasando como argumento el objeto app de Express. Esto significa que el servidor utilizará las rutas y la lógica definida en app.js.

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  console.log(`Server listening on port ${port}`); // Inicia el servidor para que escuche las solicitudes en el puerto especificado. Cuando el servidor comienza a escuchar, se ejecuta la función de devolución de llamada proporcionada, que imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado.
});
server.on("error", onError); // Establece un controlador de eventos para el evento "error" del servidor. Si ocurre un error durante la ejecución del servidor, se ejecutará la función onError para manejar el error de manera adecuada.
server.on("listening", onListening); // Establece un controlador de eventos para el evento "listening" del servidor. Cuando el servidor está escuchando en el puerto especificado, se ejecuta la función onListening, que imprime un mensaje de depuración en la consola indicando en qué dirección y puerto está escuchando el servidor.

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind); // Imprime un mensaje de depuración en la consola indicando en qué dirección y puerto está escuchando el servidor.
}

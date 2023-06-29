const express = require("express");
const app = express();
const port = 3000;

// Ruta para la vista "About Me"
app.get("/about", (req, res) => {
  const aboutData = {
    image: "ruta_de_la_imagen",
    title: "Título del About Me",
    content: "Contenido del About Me",
    date: "Fecha del About Me",
  };

  res.json(aboutData);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// require("dotenv").config();
// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var postsRouter = require("./routes/posts");
// var followRouter = require("./routes/follow");
// var feedbackRouter = require("./routes/feedback");

// require("./db/connection.js");

// var app = express();

// app.locals.title = "Keybook";

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.json());

// app.use(cors());

// // Add headers before the routes are defined
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", false);

//   // Pass to next layer of middleware
//   next();
// });

// //Routes config
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);
// app.use("/follow", followRouter);
// app.use("/feedback", feedbackRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

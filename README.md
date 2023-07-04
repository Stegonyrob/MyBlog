# Prueba Técnica Blog: Soy Linux

## Pasos para arrancar el proyecto

### Base de datos

En phpMyAdmin, crear una base de datos llamada "soy_linux" e importar el archivo soy_linux.sql de este repositorio.

Dicho archivo se encuentra en el directorio original, junto a este archivo README.md

### Archivo de environment o .env

Simplemente pegarlo dentro del directorio principal de Backend, junto a app.js, por ejemplo.

### Backend

Accedemos al directorio Backend

```
cd Soy_Linux/Backend
```

Instalamos las dependencias:

```
npm i
```

Arrancamos el servidor con uno de estos dos comandos:

```
node index.js
nodemon
```

## Frontend

Accedemos al directorio Frontend

```
cd Soy_linux/front
```

Instalamos las dependencias:

```
npm i
```

Arrancamos la aplicación de React:

```
npm start
```

## Presentación del proyecto

Para este proyecto se a trabajado React, Node, Bootstrap, MySQL y se han usado numerosas dependencias de React , Boostrap, y Express.

- El backend tiene estructura ofrecida por Express Generator para tener mayor control y orden en las rutas
- Se presentan las vistas, manteniendo únicamente los elementos funcionales .
- Se presnta la opción de editar los campos del título y contenido pero no se ha logrado implementar la edición de imagen aunque se seguira trabajando en ello.
- La base de datos gestiona todos los post las imagenes son guardadas en el servidor en la carpeta public, y su url enviada a la base de datos,desde donde se la captura para poder renderizarla en la web.
- Se a aplicado midelware Multer para la gestión de las imagenes.

## Vistas y componentes de la red social

Cada vista incluye al componente relevante, componente Footer , el componente NavBar y en cada caso sus componentes individuales.

- NavBar: barra de navegación con rutas a las diferentes vistas .
- Footer: componente sencillo con nombre del blog y enlace al repositorio.
- AboutMeView: es una renderización de una pequeña presentación en un componente card reutilizable en este caso se llama Aboutme.
- HomeView: vista que reúne varios componentes. Por un lado, muro de publicaciones dinámico de publicaciones propias, con limitación y paginación.

- EditBoxView: esta vista nos permite editar los post ya creados.
- NewArticleView: esta vista nos permite crear nuevos post , incluyendo la carga de las imagenes.

## Detalles esteticos

- CSS:se a buscado que en todo lo posible sea una aplicación responsive, se espera poder seguir ajustando para los diferentes tamaños de pantalla.

### Base de datos:

La base de datos se ralizo en Mysql

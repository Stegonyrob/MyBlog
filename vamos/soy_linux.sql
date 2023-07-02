-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2023 a las 13:35:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `soy_linux`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abaut`
--

CREATE TABLE `abaut` (
  `id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `coment` varchar(250) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `abaut`
--

INSERT INTO `abaut` (`id`, `user_id`, `title`, `coment`, `date`) VALUES
(1, '', 'Sobre Mi', 'Que les puedo contar sobre, tal vez explicar por que el nombre del blog, en una ocasión escuche una explicación que existen por lo menos dos sistemas operativos en el cerebro de las personas , windows en la mayoria de la sociedad occidental y y linux', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `image`, `createdAt`) VALUES
(3, 'Texturas de Ropa', 'También puede ocurrir que las texturas de las ropas nos desagraden, o las etiquetas, a algunos de nosotros nos gusta que la ropa sea olgada y ligera, a otros todo lo contrario debe ser pesada y apretada, ya que nos sentimos mejor así más seguros, otros de nosotros ocupamos ambas pero según en que ambito estemos, en casa ligera y olgada, y en la calle apretada y pesada, tampoco soportamos todos los tipos de tegidos, algunos nos disgustan más que otros, a algunos nos gustan los suaves al estilo de los tegidos sinteticos o la seda, y a otros algo más aspero o de textura maás densa como la lana.', 'comida.jpg', '2023-06-28 20:26:24'),
(4, 'Texturas', 'Otra cosa que nos caracteriza es que no todas las texturas que existen nos gustan, a algunos de nosotros nos mueve una necesidad inherente de tocar todo, y a otros tan solo por ver una superficie ya nos genera desagrado y nos cuesta tocarla, como la arena o el cesped, algunos no nos gusta ensuciarnos que algo nos toque seco o húmedo y nos deje una mancha como la de harina o pintura, nos extresa. \r\n   ', 'superficies.jpg', '2023-06-28 20:26:24'),
(5, 'Comunicación', 'Todos nosotros nos comunicamos, puede ser que no sea como estás acostumbrado, pero siempre presume competencía. Ten esto en consideración nuestros saltos, gritos, palmadas, susurros, valanceos y también son comunicación, no nos juzgues por ello. Puede que no hablemos en lo absoluto pero nuestros gestos, posturas y actitudes son también comunicación. No hace falta que te miremos a los ojos, lo mismo te escuchamos, si me exiges que te mire a los ojos debo esforzarme en ello y mis pensamientos se enfocan en \"debo mirar a los ojos, debo mirar a los ojos\" y no logro prestarte atención a lo que dices, no es que te oculte algo.', 'comunicacion.jpg', '2023-06-28 20:29:25'),
(6, 'Comidas', 'No todos de nosotros podemos comer de todo, ya que algunas texturas, colores, olores pueden probocar que nos sea desagradable, puede ocurrir que un sabor nos guste pero el como se siente en nuestra boca no, y por ello ante la sensación incomoda que nos genera decidimos mejor no comerlo. ', 'comida.jpg', '2023-06-28 20:30:18'),
(7, 'hola', 'aqui probando', '', '2023-06-29 11:45:53'),
(8, 'hola', 'aqui probando', '', '2023-06-29 11:46:07'),
(19, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:35'),
(20, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:38'),
(21, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:39'),
(22, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:39'),
(23, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:39'),
(24, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:40'),
(25, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:40'),
(26, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:40'),
(27, 'asdkjf', 'asdfg', NULL, '2023-07-01 17:56:40'),
(28, 'vanos', 'peuba 3021', NULL, '2023-07-01 18:11:03'),
(29, 'vanos', 'peuba 3021', NULL, '2023-07-01 18:14:00'),
(30, 'vanos', 'peuba 3021', NULL, '2023-07-01 18:14:05'),
(31, 'vamos a probar las imagenes', 'askdjfhsdkjf', NULL, '2023-07-01 18:57:19'),
(32, 'vamos a probar las imagenes', 'askdjfhsdkjf', NULL, '2023-07-01 18:57:34');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abaut`
--
ALTER TABLE `abaut`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user_id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abaut`
--
ALTER TABLE `abaut`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

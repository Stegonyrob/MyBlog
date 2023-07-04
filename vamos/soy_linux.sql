-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2023 a las 15:33:10
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
  `coment` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `abaut`
--

INSERT INTO `abaut` (`id`, `user_id`, `title`, `coment`, `date`) VALUES
(1, '', 'Sobre Mi', 'Que les puedo contar sobre mi, tal vez explicar por que el nombre del blog, en una ocasión escuche una explicación que existen por lo menos dos sistemas operativos en el cerebro de las personas, windows en la mayoria de la sociedad occidental y linux en la mayoria de la sociedad oriental y en los nordicos, por ello algunos de los linux vivimos con muchos windows y algunos windows les toca vivir con muchos linux, y esta bien no hay problema de que sea así solo que debemos saber complementarnos para que, todos podamos convivir sin que nos dañe, respetando las pequeñas particularidades de cada uno, por esto es lo que me considero linux ya que no siempre pienso de la misma manera que los demas.', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(5000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `image`, `createdAt`) VALUES
(87, 'Comidas', 'No todos de nosotros podemos comer de todo, ya que algunas texturas, colores, olores pueden probocar que nos sea desagradable, puede ocurrir que un sabor nos guste pero el como se siente en nuestra boca no, y por ello ante la sensación incomoda que nos genera decidimos mejor no comerlo.', '1688475066472-398522654.jpg', '2023-07-04 12:51:06'),
(88, 'Comunicación', 'Todos nosotros nos comunicamos, puede ser que no sea como estás acostumbrado, pero siempre presume competencía. Ten esto en consideración nuestros saltos, gritos, palmadas, susurros, valanceos y también son comunicación, no nos juzgues por ello. Puede que no hablemos en lo absoluto pero nuestros gestos, posturas y actitudes son también comunicación. No hace falta que te miremos a los ojos, lo mismo te escuchamos, si me exiges que te mire a los ojos debo esforzarme en ello y mis pensamientos se enfocan en \"debo mirar a los ojos, debo mirar a los ojos\" y no logro prestarte atención a lo que dices, no es que te oculte algo.', '1688475117299-831632246.jpg', '2023-07-04 12:51:57'),
(89, 'Texturas de la Ropa', 'También puede ocurrir que las texturas de las ropas nos desagraden, o las etiquetas, a algunos de nosotros nos gusta que la ropa sea olgada y ligera, a otros todo lo contrario debe ser pesada y apretada, ya que nos sentimos mejor así más seguros, otros de nosotros ocupamos ambas pero según en que ambito estemos, en casa ligera y olgada, y en la calle apretada y pesada, tampoco soportamos todos los tipos de tegidos, algunos nos disgustan más que otros, a algunos nos gustan los suaves al estilo de los tegidos sinteticos o la seda, y a otros algo más aspero o de textura maás densa como la lana.', '1688475166319-737604982.jpg', '2023-07-04 12:52:46'),
(90, 'Animales', 'Como a muchas personas nos gustan los animales , no a todos nos gustan lo mismo , igual que les pasa a los windows , que no todos los animales les gustan y no a todos les gustan los mismos. Pero algo que si nos destaca es que nos solemos sentir más comodos con los animales ya que ellos son más simples y no debemos estar tan atentos a no generar malas interpretaciones de nuestros comentarios o acciones.', '1688475468228-335443406.jpg', '2023-07-04 13:18:27'),
(91, 'Texturas en general', 'Otra cosa que nos caracteriza es que no todas las texturas que existen nos gustan, a algunos de nosotros nos mueve una necesidad inherente de tocar todo, y a otros tan solo por ver una superficie ya nos genera desagrado y nos cuesta tocarla, como la arena o el cesped, algunos no nos gusta ensuciarnos que algo nos toque seco o húmedo y nos deje una mancha como la de harina o pintura, nos extresa. ', '1688475800595-248495917.jpg', '2023-07-04 13:03:20'),
(92, 'Mucha Gente o Mucho Ruido', 'Estas dos cosas suelen ir de la mano, rar vez donde hay mucha gente , no hay mucho ruido, es casi inevitable que se genere ese cuchicheo incesante, los ruidos ambientales como cafeterías muy llenas pueden hacer que llegado un momento necesitemos tomar un descanso, de ese ambiente que nuestros oidos capten tantos sonidos a la vez que se nos vuelva inviable, segir en ese ambiente y pero eso no quiere decir que seamos antisociales o mal educados, solo que necesitamos descansar para retomar nuevamnete.', '1688477541710-680616470.jpg', '2023-07-04 13:32:21');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

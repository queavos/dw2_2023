SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ciudades` (`id`, `nombre`) VALUES
(2, 'Capitán Miranda'),
(3, 'San Juan del Parana'),
(4, 'FRAM'),
(6, 'Hohenau'),
(7, 'Pirapo'),
(8, 'Gral Delgado'),
(12, 'Yuty');

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido` varchar(191) NOT NULL,
  `cin` varchar(191) NOT NULL,
  `direccion` text DEFAULT NULL,
  `fecha_nac` date NOT NULL,
  `ciudad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `cin`, `direccion`, `fecha_nac`, `ciudad_id`) VALUES
(1, 'Abril', 'Pereyra', '5379699', 'b san pedro', '2023-11-04', 2),
(2, 'Ivan F.', 'Davalos', '5549165', 'Santa Ines', '2002-01-11', 3),
(3, 'Maycol', 'Leiva', '5180656', 'Santa Maria', '2001-08-24', 6);

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'admin'),
(2, 'user');

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `nombreusu` varchar(20) NOT NULL,
  `clave` varchar(191) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuarios` (`id`, `nombre`, `nombreusu`, `clave`, `rol_id`) VALUES
(1, 'Administrador', 'usuarios01', '827ccb0eea8a706c4c34a16891f84e7b', 1),
(2, 'Usuario', 'usuarios02', '827ccb0eea8a706c4c34a16891f84e7b', 2);


ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`nombreusu`);


ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

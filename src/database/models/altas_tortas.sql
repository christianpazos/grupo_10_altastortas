DROP DATABASE IF EXISTS altas_tortas;
CREATE DATABASE altas_tortas;
USE altas_tortas; 


CREATE TABLE `usuarios` (
  `usuarios_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR (100) COLLATE utf8_unicode_ci NOT NULL,
  `email` VARCHAR (100) COLLATE utf8_unicode_ci NOT NULL,
  `esAdmin` BOOLEAN COLLATE utf8_unicode_ci NOT NULL,
  `contraseña` VARCHAR (255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` VARCHAR (255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`usuarios_id`) 
);


INSERT INTO `usuarios`VALUES (DEFAULT, 'carlos', 'carlitos.benitez@yahoo.com', false, '$2b$10$ca/7V/CFl6OfZApIwxMTZOA4RfKLruPDlCGwlYD/aF8/htEJmNecq', 'avatar1628808899648.jpg'),(DEFAULT, 'prueba', 'asdasda@yahoo.com', false, '$2b$10$wT85gobExObnA.JOdq0zDOb1N5ttNR2HXkNP.qgeSEXSS1bceNjE.', 'avatar1628808960745.jpg'),(DEFAULT, 'juan', 'jauperez@asdas.com', false, '$2b$10$b9fDhHKxdjvTS3xh7KZdvedBP1IsStKDUIYHQ.OTx/7HsZz9HMgky', 'avatar1628966055321.jpg'),(DEFAULT, 'asdasd',  'asdad@aasdas.com', false, '$2b$10$HQqYechdDATDGnhle4OIOuTgih1OVZQbq8eNIgpC4D5zmm5Z06JSS', 'avatar1628967643466.webp'),(DEFAULT, 'jaun', 'juan@carlos.com', false, '$2b$10$37jXTJeM2VfS9Z4H2Fe0E.D5bvwCRlbwULhwBNxd5hXLIE9ORouBu', 'avatar1629165483872.jpg'),(DEFAULT, 'asdasdas', 'prueba@prueba.com', false, '$2b$10$z3zNbbNUwURDV3xJ06j.aOXCRwZ6jt/zpra1N9TnP1JsvPa7QSn0i', 'avatar1629235978819.jpg'),(DEFAULT, 'prueba', 'prueba@altastortas.com', true, '$2b$10$QGic0h6Um9zvP1iQyQJ9q.qvCC2mYtJoQRXi2WCddS79MZF1kHT76', 'avatar1629324710383.png'),(DEFAULT, 'juan perez`', 'prueba@prueba2.com', false, '$2b$10$zhBGjplWCic9RmxphbqgP.l8.TgFNWuNpG82zTfNNmHsJxNLSIW9W', 'avatar1629563215149.png');

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories`(
 `id` INT(10) NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR (100) NOT NULL,
 PRIMARY KEY (`id`)
)
INSERT INTO `categories` VALUES
(DEFAULT, "Fresca"),
(DEFAULT, "Liviana"),
(DEFAULT, "Pesada");

DROP TABLE IF EXISTS products;
CREATE TABLE `products`(
 `products_id` INT(10) NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR (255) NOT NULL,
 `category_id`INT(10) NOT NULL,
 `imagen` VARCHAR (255) NOT NULL,
 `precio` INT(10) NOT NULL,
 `descripcion` VARCHAR (255) NOT NULL,
 PRIMARY KEY (`products_id`), 
 FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);

INSERT INTO `products` VALUES 
(DEFAULT ,"Banana Split", 2, "uploads/products/BANANASPLIT.jpg", 2100, "Torta muy sabrosa con base de banana y dulce de leche. Ideal para acompañar el té. Incluye frutos secos y base de galleta."),
(DEFAULT,  "Bomba", 3, "uploads/products/BOMBA.jpg", 2300, "Torta orientada para dulceros con base brownie, dulce de leche y merengue. Ideal para quedar pipón. Incluye decoración de chips de chocolate."),
(DEFAULT, "Bonobón", 3, "uploads/products/BONOBON.jpg", 2500, "Torta con gusto clásico no con base bonobón. Ideal para descontracturarse. Incluye base crujiente y bonobones gusto original."),
(DEFAULT, "Coco", 1,"uploads/products/COCO.jpg", 2000, "Torta muy coqueta a base de coco y dulce de leche. Ideal para un desayuno con amigos. Incluye coco rallado y procesado."),
(DEFAULT, "Dulce de leche y crema", 2, "uploads/products/DDLCREMA.jpg", 2200, "Torta muy argentina con base dulce de leche repostero y crema chantilly. Ideal para un buen postre. Incluye dulce de leche artesanal."),
(DEFAULT, "Durazno", 1, "uploads/products/DURAZNO.jpg", 2100, "Torta para amantes de la fruta con base de durazno. Ideal para el veranito. Incluye durazno en almibar artesanal."),
(DEFAULT, "Frutilla", 1, "uploads/products/FRUTILLA.jpg", 2200, "Torta muy tropical con base de frutillas y crema. Ideal para consumir con helado. Incluye frutillas de estancias orgánicas."),
(DEFAULT, "Havannet", 3, "uploads/products/HAVANNET.jpg", 2300, "Torta para amantes del chocolate con base havannet. Ideal para golosos. Incluye copos de havannets."),
(DEFAULT, "Key Lime Pie", 2, "uploads/products/KEYLIME.jpg", 2400, "Torta muy fina con base de lima de estación. Ideal para climas cálidos. Incluye ralladura de lima."),
(DEFAULT, "Lemon Pie", 2, "uploads/products/LEMONPIE.jpg", 2100, "Torta clásica argentina con base de mousse de limón. Ideal para el cafecito. Incluye ralladura de limón."),
(DEFAULT, "Maracuyá", 1, "uploads/products/MARACUYA.jpg", 2300, "Torta muy refrescante a base de maracuyá. Ideal para comer en pareja. Incluye decoración de chocolate."),
(DEFAULT, "Merengue", 3, "uploads/products/MERENGUE.jpg", 2400, "Torta muy dulce con base de cookies y merengue. Ideal para un gustito. Incluye merengue artesanal italiano."),
(DEFAULT, "Nutella", 3, "uploads/products/NUTELLA.jpg", 2500, "Torta para fanáticos del nutella. Ideal para la merienda con amigos. Incluye avellanas silvestres del sur."),(DEFAULT, "Oreo", 2, "uploads/products/OREO.jpg", 2400, "Torta característica de la infancia con base de Oreo. Ideal para acompañar la chocolatada. Incluye trocitos de Oreo."),(DEFAULT, "Rogel", 3, "uploads/products/ROGEL.jpg", 2300, "Torta de hojaldre con base de dulce de leche y crema. Ideal para un domingo nublado. Incluye merengue auténtico europeo.")


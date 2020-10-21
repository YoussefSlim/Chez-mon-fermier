-- ------------------------
-- table category
-- ------------------------

INSERT INTO "category"("id", "name", "description", "parent_id", "image") VALUES
(1, 'Légumes', 'Consulter nos légumes du marché 100% culture française!', 91, 'legumes-cat.jpg'),
(2, 'Fruits', 'Consulter nos fruits du marché 100% culture française!', 91, 'fruits-cat.jpg'),
(3, 'Crèmerie', 'Consulter les produits de nos crèmiers 100% production française!', 91, 'cremerie-cat.jpg'),
(4, 'Lait', 'Consulter nos différents laits 100% production française!', 3, 'lait-cat.jpg'),
(5, 'Fromages', 'Consulter nos différents fromages 100% production française!', 3, 'fromages-cat.jpg'),
(6, 'Oeufs', 'Consulter nos différents oeufs 100% production française!', 3, 'oeufs-cat.jpg'),
(7, 'Beurre', 'Consulter nos différents beurre 100% production française!', 3, 'beurre-cat.jpg'),
(8, 'Boucherie - Charcuterie', 'Consulter nos différents produits de Boucherie et de Charcuterie 100% production française!', 91, 'boucherie-charcuterie-cat.jpg'),
(9, 'Boucherie', 'Consulter nos différents produits boucher 100% production française!', 8, 'boucherie-cat.jpg'),
(10, 'Boeuf', 'Consulter nos différentes variété de viandes de boeuf 100% production française!', 9, 'boeuf-cat.jpg'),
(11, 'Veau', 'Consulter nos différentes variétés de viande de veau 100% production française!', 9, 'veau-cat.jpg'),
(12, 'Agneau', 'Consulter nos différentes variétés de viande d agneau 100% production française!', 9, 'agneau-cat.jpg'),
(13, 'Moutons', 'Consulter nos différentes variétés de viande de mouton 100% production française!', 9, 'mouton-cat.jpg'),
(14, 'Porc', 'Consulter nos différentes variétés de viande de porc 100% production française!', 9, 'porc-cat.jpg'),
(15, 'Lait de brebis', 'Consulter nos différentes variétés de fromage au lait de brebis 100% production française!', 5, 'brebis-cat.jpg'),
(16, 'Lait de chèvre', 'Consulter nos différentes variétés de viande d agneau 100% production française!', 5, 'agneau-cat.jpg'),
(17, 'Lait de vache', 'Consulter nos différents fromages au lait de vache 100% production française!', 5, 'fromage-lait-vache-cat.jpg'),
(18, 'Crème', 'Consulter nos différentes variétés de crèmes 100% production française!', 3, 'creme-cat.jpg'),
(19, 'Volailles', 'Consulter nos différentes variétés de viande de volailles 100% production française!', 9, 'volailles-cat.jpg'),
(20, 'Canard', 'Consulter nos différentes variétés de viande de canard 100% production française!', 9, 'canard-cat.jpg'),
(21, 'Lapin', 'Consulter nos différentes variétés de viande de lapin 100% production française!', 9, 'lapin-cat.jpg'),
(22, 'Crèmerie bio', 'Consulter nos différents produits de crèmerie bio 100% production française!', 3, 'cremerie-bio-cat.jpg'),
(23, 'Viandes bio', 'Consulter nos différentes variétés de viandes bio 100% production française!', 9, 'viandes-bio-cat.jpg'),
(24, 'Charcuterie', 'Consulter nos différentes variétés de charcuterie 100% production française!', 8, 'charcuterie-cat.jpg'),
(25, 'Abats', 'Consulter nos différentes variétés d abats 100% production française!', 9, 'abats-cat.jpg'),
(26, 'Tripes', 'Consulter nos différentes variétés de produits tripiers 100% production française!', 9, 'tripes-cat.jpg'),
(27, 'Jambons', 'Consulter nos différentes variétés de jambons 100% production française!', 24, 'jambons-cat.jpg'),
(28, 'Poitrines & Lards', 'Consulter nos différentes variétés de poitrines et lards 100% production française!', 24, 'poitrines-lards-cat.jpg'),
(29, 'Saucisses & Merguez', 'Consulter nos différentes variétés de saucisses et merguez 100% production française!', 24, 'saucisses-merguez-cat.jpg'),
(30, 'Andouilles & Andouillettes', 'Consulter nos différentes variétés d Andouilles et Andouillettes 100% production française!', 24, 'andouilles-andouillettes-cat.jpg'),
(31, 'Boudins', 'Consulter nos différentes variétés de boudins 100% production française!', 24, 'boudins-cat.jpg'),
(32, 'Pâtés & Rillettes', 'Consulter nos différentes variétés de Pâtés et Rillettes 100% production française!', 24, 'pates-rillettes-cat.jpg'),
(33, 'Foie Gras', 'Consulter nos différentes variétés de Foie Gras 100% production française!', 24, 'foie-gras-cat.jpg'),
(34, 'Foie gras de canard', 'Consulter nos différentes variétés de Foie gras de canard 100% production française!', 33, 'foie-gras-canard-cat.jpg'),
(35, 'Foie gras oie', 'Consulter nos différentes variétés de Foie gras d oie 100% production française!', 33, 'foie-gras-oie-cat.jpg'),
(36, 'Charcuterie Bio', 'Consulter nos différentes variétés de Charcuterie Bio 100% production française!', 24, 'charcuterie-bio-cat.jpg'),
(37, 'Pommes', 'Consulter nos différentes variétés de Pommes 100% production française!', 2, 'pommes-cat.jpg'),
(38, 'Abricot', 'Consulter nos différentes variétés d Abricot 100% production française!', 2, 'abricot-cat.jpg'),
(39, 'Fraises', 'Consulter nos différentes variétés de Fraises 100% production française!', 2, 'fraises-cat.jpg'),
(40, 'Pêches', 'Consulter nos différentes variétés de Pêches 100% production française!', 2, 'peche-cat.jpg'),
(41, 'Melons', 'Consulter nos différentes variétés de Melons 100% production française!', 2, 'melons-cat.jpg'),
(42, 'Pastèques', 'Consulter nos différentes variétés de Pastèque 100% production française!', 2, 'pasteques-cat.jpg'),
(43, 'Ananas', 'Consulter nos différentes variétés de Ananas 100% production française!', 2, 'ananas-cat.jpg'),
(44, 'Citrons', 'Consulter nos différentes variétés de Fraises 100% production française!', 2, 'citrons-cat.jpg'),
(45, 'Clémentines', 'Consulter nos différentes variétés de Clémentines 100% production française!', 2, 'clementines-cat.jpg'),
(46, 'Manadarines', 'Consulter nos différentes variétés de Mandarines 100% production française!', 2, 'mandarines-cat.jpg'),
(47, 'Oranges', 'Consulter nos différentes variétés d Oranges 100% production française!', 2, 'oranges-cat.jpg'),
(48, 'Raisins', 'Consulter nos différentes variétés de Raisins 100% production française!', 2, 'raisins-cat.jpg'),
(49, 'Framboises', 'Consulter nos différentes variétés de Framboises 100% production française!', 2, 'framboises-cat.jpg'),
(50, 'Mûres', 'Consulter nos différentes variétés de Mûres 100% production française!', 2, 'mures-cat.jpg'),
(51, 'Cassis', 'Consulter nos différentes variétés de Cassis 100% production française!', 2, 'cassis-cat.jpg'),
(52, 'Groseilles', 'Consulter nos différentes variétés de Groseilles 100% production française!', 2, 'groseilles-cat.jpg'),
(53, 'Prunes', 'Consulter nos différentes variétés de Prunes 100% production française!', 2, 'prunes-cat.jpg'),
(54, 'Fruits secs', 'Consulter nos différentes variétés de Fruits secs 100% production française!', 2, 'fruits-secs-cat.jpg'),
(55, 'Fruits à coques', 'Consulter nos différentes variétés de Fruits à coques 100% production française!', 2, 'fruits-coques-cat.jpg'),
(56, 'Kiwis', 'Consulter nos différentes variétés de Kiwis 100% production française!', 2, 'kiwis-cat.jpg'),
(57, 'Mirabelles', 'Consulter nos différentes variétés de Mirabelles 100% production française!', 2, 'mirabelles-cat.jpg'),
(58, 'Fruits bio', 'Consulter nos différentes variétés de Fruits bio 100% production française!', 2, 'fruit-bio-cat.jpg'),
(59, 'Poissonerie', 'Consulter nos différentes variétés de Poissons 100% production française!', 2, 'poissonnerie-cat.jpg'),
(60, 'Poissons', 'Consulter nos différentes variétés de Poissons 100% pêche française!', 2, 'poissons-cat.jpg'),
(61, 'Eau douce', 'Consulter nos différentes variétés de Poissons d eau douce 100% pêche française!', 2, 'eau-douce-cat.jpg'),
(62, 'Mer', 'Consulter nos différentes variétés de Poissons d eau de mer 100% pêche française!', 2, 'mer-cat.jpg'),
(63, 'Fruits de mer', 'Consulter nos différentes variétés de Fruits de mer 100% culture française!', 2, 'fruit-mer-cat.jpg'),
(64, 'Boulangerie - Pâtisserie', 'Consulter nos différentes variétés de produits Boulangers et Pâtissiers 100% fabrication française!', 2, 'boulangerie-patisserie-cat.jpg'),
(65, 'Boulangerie', 'Consulter nos différentes variétés de produits boulangers 100% fabrication française!', 2, 'boulangerie-cat.jpg'),
(66, 'Pâtisserie', 'Consulter nos différentes variétés de produits patissiers 100% fabrication française!', 2, 'patisserie-cat.jpg'),
(67, 'Confiserie', 'Consulter nos différentes variétés de Confiserie 100% fabrication française!', 91, 'confiserie-cat.jpg'),
(68, 'Bonbons et sucreries', 'Consulter nos différentes variétés de bonbons et sucreries 100% fabrication française!', 67, 'bonbons-cat.jpg'),
(69, 'Miel', 'Consulter nos différentes variétés de bonbons et sucreries 100% fabrication française!', 67, 'miel-cat.jpg'),
(70, 'Chocolat', 'Consulter nos différentes variétés de chocolat 100% fabrication française!', 67, 'chocolat-cat.jpg'),
(71, 'Liquide', 'Consulter nos différentes variétés de produits liquides comme les huiles ou les boissons en tout genre 100% fabrication française!', 91, 'liquide-cat.jpg'),
(72, 'Boissons', 'Consulter nos différentes variétés de boissons 100% fabrication française!', 71, 'boissons-cat.jpg'),
(73, 'Jus de fruit', 'Consulter nos différentes variétés de jus de fruit 100% fabrication française!', 72, 'jus-de-fruits-cat.jpg'),
(74, 'Boissons gazeuses', 'Consulter nos différentes variétés de boissons gazeuses 100% fabrication française!', 72, 'boissons-gazeuses-cat.jpg'),
(75, 'Huiles', 'Consulter nos différentes variétés de huiles 100% fabrication française!', 71, 'huiles-cat.jpg'),
(76, 'Huiles d Olives', 'Consulter nos différentes variétés  d huiles d olives 100% fabrication française!', 75, 'huiles-olives-cat.jpg'),
(77, 'Huiles de pépins de raisins', 'Consulter nos différentes variétés d huiles de pépins de raisins 100% fabrication française!', 75, 'huiles-pepins-raisin-cat.jpg'),
(78, 'Huiles de Tournesol', 'Consulter nos différentes variétés d huiles de tournesols 100% fabrication française!', 75, 'huiles-tournesols-cat.jpg'),
(79, 'Vins et Spiritueux', 'Consulter nos différentes variétés de Vins et Spiritueux 100% fabrication française!', 71, 'vins-spiritueux-cat.jpg'),
(80, 'Vins rouges', 'Consulter nos différentes variétés de vins rouges 100% fabrication française!', 79, 'vins-rouges-cat.jpg'),
(81, 'Vins blancs', 'Consulter nos différentes variétés de vins blancs 100% fabrication française!', 79, 'vins-blancs-cat.jpg'),
(82, 'Vins Rosés', 'Consulter nos différentes variétés de vins rosés 100% fabrication française!', 79, 'vins-rosés-cat.jpg'),
(83, 'Vins Mousseux', 'Consulter nos différentes variétés de vins mousseux 100% fabrication française!', 79, 'vins-mousseux-cat.jpg'),
(84, 'Champagne', 'Consulter nos différentes variétés de Champagnes 100% fabrication française!', 79, 'champagnes-cat.jpg'),
(85, 'Spiritueux', 'Consulter nos différentes variétés de spiritueux 100% fabrication française!', 79, 'spiritueux-cat.jpg'),
(86, 'Rhum', 'Consulter nos différentes variétés de rhum 100% fabrication française!', 79, 'rhum-cat.jpg'),
(87, 'Bières', 'Consulter nos différentes variétés de bières 100% fabrication française!', 79, 'bières-cat.jpg'),
(88, 'Bières blondes', 'Consulter nos différentes variétés de Bières blondes 100% fabrication française!', 87, 'bieres-blondes-cat.jpg'),
(89, 'Bières Brunes', 'Consulter nos différentes variétés de Bières brunes 100% fabrication française!', 79, 'bieres-brunes-cat.jpg'),
(90, 'Bières blanches', 'Consulter nos différentes variétés de bières blanches 100% fabrication française!', 79, 'bieres-blanches-cat.jpg'),
(91, 'Accueil', 'Bienvenue sur la page d accueil du site www.chezmonfermier.fr', null, 'accueil-cat.jpg');

-- ------------------------
-- table shop
-- ------------------------

INSERT INTO "shop"("name", "address", "additional_address", "postcode", "city", "phone_number", "email", "password", "logo", "siret", "tva", "delivery_method", "department_number") VALUES
('La Ferme de Jeannot', '1 rue des datas', 'lieu-dit des apis', '63000', 'Clermont-Ferrand', '04 04 04 04 04', 'jean@oclock.io', 'js4life', 'ferme-de-jean.jpg', 12345678901234, 'FR123456789', 'Livraison à domicile', 63),
('La Foire de Etienne', '1 rue des helpers', 'lieu-dit des cool-cool', '91000', 'Evry', '04 01 01 04 04', 'etienne@oclock.io', 'js4life', 'foire-etienne.jpg', 12345678901235, 'FR012345678', 'Retrait chez le producteur', 91),
('Le verger de Charles', '1 rue des vergers', 'lieu-dit des arbres', '45300', 'Pithiviers', '02 02 04 04 04', 'charles@oclock.io', 'js4life', 'verger-charles.jpg', 01234567890123, 'FR012345671', 'Retrait chez le producteur', 45);

-- ------------------------
-- table product
-- ------------------------

INSERT INTO "product"("title", "description", "quantity", "price_ht", "price_ttc", "url", "shop_id", "category_id") VALUES
('Rôti de boeuf', 'Ceci est un rôti de boeuf tendre et certifié français!', 2, 10, 12, 'roti-de-boeuf', 1, 10),
('Rôti de veau', 'Ceci est un rôti de veau tendre et certifié français!', 2, 10, 12, 'roti-de-veau', 1, 11),
('Lot de Pommes Pink Lady au cageot', 'Une cagette de pomme de variété Pink Lady', 4, 100, 120, 'lot-pommes-pink-lady', 1, 2),
('Jambons de pays au kilo', 'Ceci est un jambon de pays débité au kilogrammes, tendre et certifié français!', 2, 10, 12, 'jambon-de-pays-a-kilo', 1, 27),
('Camembert veritable de normandie à la pièce', 'Ceci est un véritable camembert de Normandie vendu à la pièce et certifié français!', 2, 10, 12, 'camembert-veritable-de-normandie-a-la-piece', 3, 17);

-- ------------------------
-- table customer
-- ------------------------

INSERT INTO "customer" ("first_name", "last_name", "address", "additional_address", "postcode", "city", "phone_number", "email", "password") VALUES

('Michel', 'Haché', '18, rue des Lacs', '', '78800 ', 'HOUILLES', '0131694631', 'michel.hache@gmail.com', '1234'),
('Denise ', 'Lavallée', '92, rue des lieutemants Thomazo', '', '39100 ', 'DOLE', '0336259557', 'deniselavallee@hotmail.com', '1234'),
('Maureen ', 'Bédard', '33, cours Jean Jaures', 'chemin des lilas', '33300 ', 'BORDEAUX', '0500051680', 'bedard-maureen@gmail.com', '1234'),
('Fleurette ', 'Rocheleau', '24, rue Victor Hugo', '', '91100 ', 'CORBEIL-ESSONNES', '0168237575', 'frocheleau@mailto.com', '1234'),
('Baptiste ', 'Garceau', '21, boulevard de la Liberation', '', '13015 ', 'MARSEILLE', '0441273732', 'baptiste-garceau@gmail.com', '1234'),
('Martin', 'Desjardins', '78, rue Adolphe Wurtz', 'allée des mouettes', '43000  ', 'LE PUY-EN-VELAY', '0495109796', 'martin-desjardins@gmail.com', '1234'),
('Tristan', 'Lacroix', '16, Avenue De Marlioz', '', '74100 ', 'ANNEMASSE', '0475473982', 'tristanlacroix@free.fr', '1234'),
('Léon', 'Déziel', '66, rue Clement Marot', '', '66000 ', 'PERPIGNAN', '0447857612', 'leaondeziel@gmail.com', '1234'),
('Lucille ', 'Pinette', '93, rue Bonneterie', '', '12100 ', 'MILLAU', '0514815164', 'lucillepinette@gmail.com', '1234'),
('William ', 'Ducharme', '43, rue Gontier-Patin', '', '13100 ', 'AIX-EN-PROVENCE', '0479708508', 'williamducharme@mailto.com', '1234');

-- ------------------------
-- table order
-- ------------------------

INSERT INTO "order"( "order_number", "amount", "customer_id") VALUES
(00001, 10, 1),
(00002, 100, 2);

-- ------------------------
-- table admin
-- ------------------------

INSERT INTO "admin" ("username", "email", "password") VALUES
('Jerry', 'jerryblablashow@gmail.com', 'admin'),
('Tanguy', 'bruwaert.tanguy@gmail.com', 'admin'),
('Youssef', 'slimyoussef9511@gmail.com', 'admin'),
('Christine', 'guibertch@gmail.com', 'admin'),
('Admin', 'info.chezmonfermier@gmail.com', 'admin');

-- ------------------------
-- table product_has_order
-- ------------------------
INSERT INTO "product_has_order"("order_id", "product_id") VALUES
(1, 2),
(1, 1),
(2, 3),
(2, 4);

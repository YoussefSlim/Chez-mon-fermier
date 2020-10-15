-- ------------------------
-- table category
-- ------------------------

INSERT INTO "category"("id", "name", "description", "parent_id", "image") VALUES
('1', 'Légumes', 'Consulter nos légumes du marché 100% culture française!', '', 'legumes-cat.jpg'),
('2', 'Fruits', 'Consulter nos fruits du marché 100% culture française!', '', 'fruits-cat.jpg'),
('3', 'Crèmerie', 'Consulter les produits de nos crèmiers 100% production française!', '', 'cremerie-cat.jpg'),
('4', 'Lait', 'Consulter nos différents laits 100% production française!', '3', 'lait-cat.jpg'),
('5', 'Fromages', 'Consulter nos différents fromages 100% production française!', '3', 'fromages-cat.jpg'),
('6', 'Oeufs', 'Consulter nos différents oeufs 100% production française!', '3', 'oeufs-cat.jpg'),
('7', 'Beurre', 'Consulter nos différents beurre 100% production française!', '3', 'beurre-cat.jpg'),
('8', 'Boucherie - Charcuterie', 'Consulter nos différents produits de Boucherie et de Charcuterie 100% production française!', '', 'boucherie-charcuterie-cat.jpg'),
('9', 'Boucherie', 'Consulter nos différents produits boucher 100% production française!', '8', 'boucherie-cat.jpg'),
('10', 'Boeuf', 'Consulter nos différentes variété de viandes de boeuf 100% production française!', '9', 'boeuf-cat.jpg'),
('11', 'Veau', 'Consulter nos différentes variétés de viande de veau 100% production française!', '9', 'veau-cat.jpg'),
('12', 'Agneau', 'Consulter nos différentes variétés de viande d agneau 100% production française!', '9', 'agneau-cat.jpg'),
('13', 'Moutons', 'Consulter nos différentes variétés de viande de mouton 100% production française!', '9', 'mouton-cat.jpg'),
('14', 'Porc', 'Consulter nos différentes variétés de viande de porc 100% production française!', '9', 'porc-cat.jpg'),
('15', 'Lait de brebis', 'Consulter nos différentes variétés de fromage au lait de brebis 100% production française!', '5', 'brebis-cat.jpg'),
('16', 'Lait de chèvre', 'Consulter nos différentes variétés de viande d agneau 100% production française!', '5', 'agneau-cat.jpg'),
('17', 'Lait de vache', 'Consulter nos différents fromages au lait de vache 100% production française!', '5', 'fromage-lait-vache-cat.jpg'),
('18', 'Crème', 'Consulter nos différentes variétés de crèmes 100% production française!', '3', 'creme-cat.jpg'),
('19', 'Volailles', 'Consulter nos différentes variétés de viande de volailles 100% production française!', '9', 'volailles-cat.jpg'),
('20', 'Canard', 'Consulter nos différentes variétés de viande de canard 100% production française!', '9', 'canard-cat.jpg'),
('21', 'Lapin', 'Consulter nos différentes variétés de viande de lapin 100% production française!', '9', 'lapin-cat.jpg'),
('22', 'Crèmerie bio', 'Consulter nos différents produits de crèmerie bio 100% production française!', '3', 'cremerie-bio-cat.jpg'),
('23', 'Viandes bio', 'Consulter nos différentes variétés de viandes bio 100% production française!', '9', 'viandes-bio-cat.jpg'),
('24', 'Charcuterie', 'Consulter nos différentes variétés de charcuterie 100% production française!', '8', 'charcuterie-cat.jpg'),
('25', 'Abats', 'Consulter nos différentes variétés d abats 100% production française!', '9', 'abats-cat.jpg'),
('26', 'Abats', 'Consulter nos différentes variétés de produits tripiers 100% production française!', '9', 'tripes-cat.jpg'),
('27', 'Jambons', 'Consulter nos différentes variétés de jambons 100% production française!', '24', 'jambons-cat.jpg'),
('28', 'Poitrines & Lards', 'Consulter nos différentes variétés de poitrines et lards 100% production française!', '24', 'poitrines-lards-cat.jpg'),
('29', 'Saucisses & Merguez', 'Consulter nos différentes variétés de saucisses et merguez 100% production française!', '24', 'saucisses-merguez-cat.jpg'),
('30', 'Andouilles & Andouillettes', 'Consulter nos différentes variétés d Andouilles et Andouillettes 100% production française!', '24', 'andouilles-andouillettes-cat.jpg'),
('31', 'Boudins', 'Consulter nos différentes variétés de boudins 100% production française!', '24', 'boudins-cat.jpg'),
('32', 'Pâtés & Rillettes', 'Consulter nos différentes variétés de Pâtés et Rillettes 100% production française!', '24', 'pates-rillettes-cat.jpg'),
('33', 'Foie Gras', 'Consulter nos différentes variétés de Foie Gras 100% production française!', '24', 'foie-gras-cat.jpg'),
('34', 'Foie gras de canard', 'Consulter nos différentes variétés de Foie gras de canard 100% production française!', '33', 'foie-gras-canard-cat.jpg'),
('35', 'Foie gras oie', 'Consulter nos différentes variétés de Foie gras d oie 100% production française!', '33', 'foie-gras-oie-cat.jpg'),
('36', 'Charcuterie Bio', 'Consulter nos différentes variétés de Charcuterie Bio 100% production française!', '24', 'charcuterie-bio-cat.jpg'),
;

-- ------------------------
-- table shop
-- ------------------------

INSERT INTO "shop"("id", "name", "address", "additional_adress", "postcode", "city", "phone_number", "email", "password", "logo", "siret", "tva", "delivery_method") VALUES
('1', 'La Ferme de Jeannot', '1 rue des datas', 'lieu-dit des apis', '63000', 'Clermont-Ferrand', '04 04 04 04 04', 'jean@oclock.io', 'js4life', 'ferme-de-jean.jpg', '12345678901234', 'FR123456789', 'livraison à domicile'),
('2', 'La Foire de Etienne', '1 rue des helpers', 'lieu-dit des cool-cool', '91000', 'Evry', '04 01 01 04 04', 'etienne@oclock.io', 'js4life', 'foire-etienne.jpg', '12345678901235', 'FR012345678', 'Retrait'),
('3', 'Le verger de Charles', '1 rue des vergers', 'lieu-dit des arbres', '45300', 'Pithiviers', '02 02 04 04 04', 'charles@oclock.io', 'js4life', 'verger-charles.jpg', '01234567890123', 'FR012345671', 'Retrait'),
;

-- ------------------------
-- table product
-- ------------------------

INSERT INTO "product"("id", "title", "description", "quantity", "price_ht", "price_ttc", "url", "shop_id", "category_id") VALUES
('1', 'Rôti de boeuf', 'Ceci est un rôti de boeuf tendre et certifié français!', 2, 10, 12, 'roti-de-boeuf', 1, 10),
('2', 'Rôti de veau', 'Ceci est un rôti de veau tendre et certifié français!', 2, 10, 12, 'roti-de-veau', 1, 11),
('3', 'Lot de Pommes Pink Lady au cageot', 'Une cagette de pomme de variété Pink Lady', 4, 100, 120, 'lot-pommes-pink-lady', 1, 2),
('4', 'Jambons de pays au kilo', 'Ceci est un jambon de pays débité au kilogrammes, tendre et certifié français!', 2, 10, 12, 'jambon-de-pays-a-kilo', 1, 27),
('5', 'Camembert veritable de normandie à la pièce', 'Ceci est un véritable camembert de Normandie vendu à la pièce et certifié français!', 2, 10, 12, 'camembert-veritable-de-normandie-a-la-piece', 3, 17);

-- ------------------------
-- table customer
-- ------------------------



-- ------------------------
-- table order
-- ------------------------

INSERT INTO "order"("id", "order_number", "amount", "customer_id") VALUES
('1', 00001, '10', 1),
('2', 00002, '100', 2);

-- ------------------------
-- table admin
-- ------------------------


-- ------------------------
-- table product_has_order
-- ------------------------


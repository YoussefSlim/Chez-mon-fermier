-- ------------------------
-- table category
-- ------------------------

INSERT INTO "category"("id", "name", "description", "parent_id", "image") VALUES
('1', 'Légumes', 'Consulter nos légumes du marché 100% culture française!', "", "legumes-cat.jpg"),
('2', 'Fruits', 'Consulter nos fruits du marché 100% culture française!', "", "fruits-cat.jpg"),
('3', 'Crèmerie', 'Consulter les produits de nos crèmiers 100% production française!', "", "cremerie-cat.jpg"),
('4', 'Lait', 'Consulter nos différents laits 100% production française!', "3", "lait-cat.jpg"),
('4', 'Lait', 'Consulter nos différents laits 100% production française!', "3", "lait-cat.jpg"),
('6', 'Dumbledore'),
('7', 'Black');

-- ------------------------
-- table product
-- ------------------------

INSERT INTO "product"("id", "title", "description", "quantity", "price_ht", "price_ttc", "url", "shop_id", "category_id") VALUES
('1', 'Rôti de boeuf', 'Ceci est un rôti de boeuf tendre et certifié français!'),
('2', 'Potter'),
('3', 'Evans'),
('4', 'Weasley'),
('5', 'Malefoy'),
('6', 'Dumbledore'),
('7', 'Black');
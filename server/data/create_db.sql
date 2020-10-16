-- Bonne pratique : on crée une TRANSACTION (=un bloc indivisible d'instructions)
-- Si quelque chose se passe mal entre "BEGIN" et "COMMIT", tout est annulé !
BEGIN TRANSACTION;

-- on commence par détruire toutes les tables si elles existent
DROP TABLE IF EXISTS "product", "category", "order", "shop", "customer", "admin", "product_has_order";
DROP TYPE IF EXISTS "delivery";

-- et c'est parti, on crée les tables
CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INT NOT NULL,
    "price_ht" INT NOT NULL DEFAULT 0,
    "price_ttc" INT NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL,
    "shop_id" INT NOT NULL, 
    "category_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INT PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "description" TEXT,
    "parent_id" int REFERENCES category(id),
    "image" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "customer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "additional_address" TEXT,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "order" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "order_number" INT UNIQUE NOT NULL,
    "amount" INT NOT NULL,
    "customer_id" INT REFERENCES customer(id) NOT NULL ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TYPE delivery AS ENUM ('Livraison à domicile', 'Retrait chez le producteur');

CREATE TABLE "shop" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "additional_address" TEXT,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logo" TEXT,
    "siret" TEXT UNIQUE NOT NULL,
    "tva" Text NOT NULL,
    "delivery_method" delivery,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "admin" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "product_has_order" (
    "order_id" INT NOT NULL,
    "product_id" INT NOT NULL
);

COMMIT;
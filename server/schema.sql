CREATE TYPE stock AS ENUM('in stock', 'sold out', 'Backordered');

CREATE TABLE "products"(
    "id" INTEGER NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "sku" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "instock" stock,
    "offers" INTEGER NOT NULL,
    "variations" JSON NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("id");
CREATE TABLE "protectionPlans"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL
);
ALTER TABLE
    "protectionPlans" ADD PRIMARY KEY("id");
CREATE TABLE "mightAlsoNeed"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL
);
ALTER TABLE
    "mightAlsoNeed" ADD PRIMARY KEY("id");
CREATE TABLE "offers"(
    "id" INTEGER NOT NULL,
    "offerType" INTEGER NOT NULL,
    "offers" JSON NOT NULL,
    "product_id" INTEGER NOT NULL
);
ALTER TABLE
    "offers" ADD PRIMARY KEY("id");
ALTER TABLE
    "mightAlsoNeed" ADD CONSTRAINT "mightalsoneed_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "protectionPlans" ADD CONSTRAINT "protectionplans_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "offers" ADD CONSTRAINT "offers_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
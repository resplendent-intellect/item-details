CREATE TYPE stock AS ENUM('in stock', 'sold out', 'Backordered');

CREATE TABLE "products"(
    "_id" INTEGER NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "sku" INTEGER NOT NULL,
    "price" MONEY NOT NULL,
    "instock" stock,
    "variations" JSON NOT NULL,
    "offers" JSON NOT NULL,
    "protectionPlans" JSON NOT NULL,
    "mightAlsoNeed" JSON NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("_id");

COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products1.csv'
DELIMITER ','
CSV HEADER;

COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products2.csv'
DELIMITER ','
CSV HEADER;

COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products3.csv'
DELIMITER ','
CSV HEADER;

COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products4.csv'
DELIMITER ','
CSV HEADER;

COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products5.csv'
DELIMITER ','
CSV HEADER;
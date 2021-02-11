CREATE TYPE stock AS ENUM('in stock', 'sold out', 'Backordered');

CREATE TABLE "products"(
    "_id" INTEGER NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "sku" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "instock" stock,
    "variations" JSON NOT NULL,
    "offers" JSON NOT NULL,
    "protectionPlans" JSON NOT NULL,
    "mightAlsoNeed" JSON NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("_id");

-- copy csv files into local machines postgres db
COPY products FROM '/home/hayley/Desktop/hrsjo3/resplendent/bestbuy-itemdetails/database/products1.csv'
DELIMITER ','
CSV HEADER;

-- copy csv files into EC2 instance machines postgres db
COPY products FROM '/home/ubuntu/products5.csv'
DELIMITER ','
CSV HEADER;

-- psql -c "\copy products FROM '/home/csv/products1.csv'
-- DELIMITER ','
-- CSV HEADER;"


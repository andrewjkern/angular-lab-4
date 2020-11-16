DROP DATABASE IF EXISTS ExpressShopDB;

CREATE DATABASE ExpressShopDB;

\c ExpressShopDB;

CREATE TABLE IF NOT EXISTS shopping_cart(
    id: serial UNIQUE PRIMARY KEY,
    product: VARCHAR(20),
    price: INT,
    quantity: INT
);

INSERT INTO shopping_cart (product, price, quantity)
VALUES
("Milk", 3, 1),
("Bread", 4, 2),
("Cereal", 5, 3)
-- assignment 2
-- create 'product_db' databse
-- create following tables
-- categories: id (PK), title, description
-- products: id (PK), title, price, description, category (FK), company
-- orders: id (PK), total, date
-- order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
-- create relationship as shown in the table schema
-- add some dummy data

-----------------------------------------------------------------------------

-- Ansers

--------------------------------------------------------------------------

-- CREATE DATABASE product_db;
-- drop database product_db;

-- use product_db;

-- CREATE TABLE categories(
--     id int PRIMARY KEY IDENTITY(1,1),
--     title varchar(20),
--     description varchar(100),
-- );

-- INSERT INTO categories(title,description) VALUES
-- ('Sports','Sports cloths and sports Equipments'),
-- ('Home','Home Accesesories and Material');

-- SELECT * FROM categories;

-- CREATE Table orders(
-- id int primary key,
-- total int,
-- date varchar(20)
-- );

-- INSERT INTO orders(id,total,date) VALUES
-- (1,10,'21/08/2022'),
-- (2,20,'22/08/2022'),
-- (3,10,'25/08/2022');

-- CREATE TABLE products(
--     id int primary key IDENTITY(1,1),
--     title varchar(20),
--     price int,
--     description varchar(100),
--     category int,
--     company varchar(20),
--     foreign key(category) REFERENCES categories(id)
-- );

-- INSERT INTO products(title,price,description,category,company) 
-- VALUES
-- ('Sports Pants',3000,'Something',1,'Nike'),
-- ('Frying pan',500,'Something releted to Home',2,'Prestige'),
-- ('Bat',2000,'Woodland English wello',1,'MRF')


-- create table order_details(
--     id int primary key,
--     orderId int,
--     productId int,
--     quantuty int,
--     price int,
--     totalPrice int,
--     discount int,
--     foreign key(orderId) REFERENCES orders(id),
--     foreign key(productId) REFERENCES products(id)
-- );

-- INSERT INTO order_details(id,orderId,productId,quantuty,price,totalPrice,discount)
-- VALUES 
-- -- (1,1,1,5,3000,3000*5,10);
-- -- (2,2,2,10,500,500*10,5);
-- (3,1,3,10,2000,2000*10,10);


-- SELECT * FROM categories;
-- SELECT * FROM products;
-- SELECT * FROM orders;
-- SELECT * FROM order_details;



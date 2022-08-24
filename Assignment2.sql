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
-- use MyDB;
-- drop database product_db;

-- use product_db;

-- CREATE TABLE categories(
--     id int PRIMARY KEY IDENTITY(1,1),
--     title varchar(20),
--     description varchar(100),
-- );

-- CREATE Table orders(
-- id int primary key,
-- total int,
-- date varchar(20)
-- );

-- CREATE TABLE products(
--     id int primary key IDENTITY(1,1),
--     title varchar(20),
--     price int,
--     description varchar(100),
--     category int,
--     company varchar(20),
--     foreign key(category) REFERENCES categories(id)
-- );

create table order_details(
    id int primary key,
    orderId int,
    productId int,
    quantuty int,
    price int,
    totalPrice int,
    discount int,
    foreign key(orderId) REFERENCES orders(id),
    foreign key(productId) REFERENCES products(id)
);


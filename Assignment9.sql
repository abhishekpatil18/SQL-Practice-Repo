USE sales_db;
SELECT * FROM salespeople;
SELECT * FROM customers;
 SELECT * FROM orders;

-- Q1 : Create an index that will enable a user to pull orders for ‘1990-10-03’ out of the Orders table
-- quickly.

CREATE INDEX fast_orders ON orders(odate) where odate='1990-10-03'

-- Q2 : If the Orders table has already been created, how can you force the onum field to be unique
-- (assume all current values are unique)?
CREATE UNIQUE INDEX forces ON orders(onum);

-- Q3 : Create an index that would permit salesperson to retrieve his orders.
CREATE INDEX ord_snum ON orders(snum);
CREATE INDEX sale_snum ON salespeople(snum);
SELECT * FROM salespeople;
 SELECT * FROM orders;

-- Q4 : Let us assume that each salesperson is to have only one customer of a given rating, and that this is
-- currently the case. Create an index that enforces it.

CREATE INDEX cust_rating ON customers(snum,cnum,rating);
SELECT * FROM customers;

-- Q5 : Create an index to speed up searching order on a given date by given customer.
CREATE INDEX speed_searching on orders(onum,cnum);
CREATE INDEX speed_searching_by_date on orders(odate,cnum);

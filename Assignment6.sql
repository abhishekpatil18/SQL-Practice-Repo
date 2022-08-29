USE sales_db;

SELECT * FROM salespeople;
SELECT * FROM customers;
SELECT * FROM orders;

--1)Write a query that counts the number of salespeople registering orders for each day. (If a
--salesperson has more than one order on a given day, he or she should be counted only once.)
SELECT odate ,COUNT( DISTINCT snum) FROM orders GROUP BY odate;

--2)Write a query on the Customers table that will find the highest rating in each city. Put the output in
--this form:
--For the city (city), the highest rating is : (rating).
SELECT  city , max(rating) as highest_rating  FROM customers GROUP BY(city);

--3)Write a query that totals the orders for each day and places the results in descending order
SELECT odate,count(onum)  FROM orders GROUP BY odate ORDER BY count(onum) DESC;

--4)Write a query that selects the total amount in orders for each salesperson for whom this total is
--greater than the amount of the largest order in the table.
SELECT sum(amt) as total FROM orders GROUP BY snum HAVING sum(amt)>(SELECT max(amt)FROM orders); 

--5)Write a query that selects the highest rating in each city
SELECT max(rating) as max_rating FROM customers GROUP BY city;

--6)Largest order taken by each salesperson with order value more than Rs.3000. 
SELECT max(amt) FROM orders GROUP BY snum HAVING max(amt) >3000;

--7)Select each customer smallest order.
SELECT cnum, min(amt) as min_amount from orders GROUP BY cnum;
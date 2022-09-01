USE sales_db;
SELECT * FROM salespeople;
SELECT * FROM customers;
 SELECT * FROM orders;

--1)Write a query that uses a subquery to obtain all orders for the customer named Cisneros. ASSUMe
--you do not know his customer number (cnum).
SELECT onum FROM orders WHERE orders.cnum=(SELECT cnum FROM customers WHERE cname='Cisneros');

--2)Write a query that produces the names and ratings of all customers who have above- average
--orders.
SELECT cname,rating FROM customers WHERE cnum IN(SELECT cnum FROM orders WHERE amt > (SELECT avg(amt) FROM orders));

--3)Write a query that selects the total amount in orders for each salesperson for whom this total is
--greater than the amount of the largest order in the table.
SELECT SUM(amt) AS total FROM orders GROUP BY snum HAVING SUM(amt)>(SELECT MAX(amt)FROM orders); 

--4)Write a query that selects all customers whose ratings are equal to or greater than ANY of Serres
SELECT * FROM customers WHERE rating >=ANY (SELECT rating FROM customers WHERE snum IN (SELECT snum FROM salespeople WHERE sname='Serres'));

--5)Write a query using ANY or ALL that will find all salespeople who have no customers located in
--their city.
SELECT s.sname,s.city ,c.cname,c.city FROM salespeople s, customers c WHERE s.snum= c.snum AND s.city != c.city;

--6)Write a query that selects all orders for amounts greater than any for the customers in London.
SELECT * FROM orders WHERE amt> ANY (SELECT amt FROM orders WHERE cnum IN (SElect cnum FROM customers WHERE city='London'));

--7)Extract all the orders of Motika
SELECT * FROM orders WHERE snum=(SELECT snum FROM salespeople WHERE sname='Motika');

--8)Find all the order attribute to salespeople servicing customers in London.
SELECT * FROM orders WHERE snum IN(SELECT snum FROM salespeople WHERE city='London');

--9)Find names and numbers of all salesperson who have more than one customer. 
SELECT sname,snum FROM salespeople WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(*)>1);

--10)Find salespeople number,name and city who have multiple customers.
SELECT sname,snum,city FROM salespeople WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(*)>1);

--11)Select customers who have a greater rating than any other customer in Rome.
SELECT * FROM customers WHERE rating > ANY(SELECT rating FROM customers WHERE city='Rome');

--12)Select all orders that had amounts that were greater that at leASt one of the orders FROM ‘1990-10-
--04’ .
SELECT * FROM orders WHERE amt>(SELECT MIN(amt)FROM orders WHERE odate='1990-10-04');

--13)Find all orders with amounts smaller than any amount for a customer in San Jose. 
SELECT * FROM orders WHERE amt < ANY(SELECT amt FROM orders,customers WHERE customers.city='San Jose' AND orders.cnum=customers.cnum);

--14)Select those customers whose rating are higher than every customer in Paris.
SELECT * FROM customers WHERE rating > ALL(SELECT rating FROM customers WHERE city='Paris');

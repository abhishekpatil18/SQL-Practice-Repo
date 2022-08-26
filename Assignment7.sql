        USE sales_db;
        SELECT * FROM salespeople;
        SELECT * FROM customers;
        SELECT * FROM orders;

--1)Write a query that lists each order number followed by the name of the customer who made the
--order.
SELECT orders.onum, customers.cname from orders ,customers where orders.cnum=customers.cnum; 

--2)Write a query that gives the names of both the salesperson and the customer for each order along
--with the order number
SELECT orders.onum, customers.cname ,salespeople.sname from orders ,customers,salespeople where orders.cnum=customers.cnum 
AND customers.snum=salespeople.snum;

--3)Write a query that produces all customers serviced by salespeople with a commission above 12%.
--Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission.
SELECT customers.cname,salespeople.sname,salespeople.comm FROM customers,salespeople WHERE customers.snum=salespeople.snum AND salespeople.comm>0.12;

--4)Write a query that calculates the amount of the salesperson’s commission on each order by a
--customer with a rating above 100.
SELECT amt,comm from salespeople INNER JOIN customers ON salespeople.snum=customers.snum INNER JOIN orders ON customers.snum=orders.snum WHERE rating>100;

--5)Write a query that produces all pairs of salespeople who are living in the same city.Exclude
--combinations of salespeople with themselves as well as duplicate rows with the order reversed
SELECT s.sname,s1.sname,s.city from salespeople s, salespeople s1 WHERE s.city=s1.city AND s.sname>s1.sname;
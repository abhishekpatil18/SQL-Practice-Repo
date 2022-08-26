-- assignment 5
-- To solve below queries use "hr" database
-- Display first name and last name after converting the first letter of each name to upper case and
-- the rest to lower case.
-- Display the first word in job title.
-- Display the length of first name for employees where last name contain character ‘b’ after 3rd
-- position.
-- Display first name in upper case and email address in lower case for employees where the first
-- name and email address are same irrespective of the case.
-- Display first name, salary, and round the salary to thousands.
-- Display employee ID and the date on which he ended his previous job.
-- Display first name and date of first salary of the employees.
-- Display first name and experience of the employees.
-- Display first name of employees who joined in 2001.
-- Display employees who joined in the current year.
-- Display the number of days between system date and 1st January 2011.
-- Display number of employees joined after 15th of the month.
-- Display third highest salary of employees.

use hr_db;

-- Display first name and last name after converting the first letter of each name to upper case and  the rest to lower case.
UPDATE employees set FIRST_NAME =  upper(left(FIRST_NAME,1)) + SUBSTRING(FIRST_NAME, 2, LEN(FIRST_NAME));
SELECT FIRST_NAME FROM employees;

--  Display the first word in job title.
select JOB_TITLE, left(JOB_TITLE,1) AS FirstLetter from jobs order by JOB_TITLE;


-- Display employee ID and the date on which he ended his previous job

SELECT * FROM employees;
SELECT * FROM job_history;

SELECT e.EMPLOYEE_ID,e.FIRST_NAME,e.LAST_NAME , j.END_DATE FROM employees e 
INNER JOIN job_history j ON 
e.EMPLOYEE_ID=j.EMPLOYEE_ID ORDER BY j.END_DATE 




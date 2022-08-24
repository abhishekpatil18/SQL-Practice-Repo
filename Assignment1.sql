-- assignment 1
-- create 'student_db' database
-- create following tables in database with proper data types
-- student: id (PK), name, address, phone, email, age, schoolId (FK)
-- school: id (PK), name, address, principal, phone
-- create relationship as shown in the table schema
-- add some dummy data

--------------------------------------------------------
-- Answers.
--------------------------------------------------------
-- create DATABASE student_db;
-- use student_db;

-- CREATE TABLE school(
-- id int PRIMARY key IDENTITY(1,1),
--  name varchar(20),
--     address varchar(50),
--     principal varchar(20),
--     phone varchar(10)
-- );

-- create table student(
--     id int primary key,
--     name varchar(20),
--     address varchar(50),
--     phone varchar(10),
--     email varchar (20),
--     age int,
--     schoolId int,
--     FOREIGN key(schoolId) REFERENCES school(id)
--     );

-- insert into school(name,address,principal,phone) 
-- VALUES ('NKVS','MIDC Kupwad','Pawar sir','9876543210'),
-- ('BAmnoli School','Bamnoli Kupwad','Mulani sir','9630258741');

-- select * from school;

-- insert into student(id,name,address,phone,email,age,schoolId) VALUES
--  (1,'Abhi','Bamnoli','8552013697','abhi@gmail.com',22,3);
-- (2,'Rohit','kupwad','1233456789','rohit@gmail.com',22,5);

-- select * from student;
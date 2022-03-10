CREATE DATABASE studentdb
GO

USE studentdb
GO

CREATE TABLE Student(
    _id int IDENTITY(1,1),
    name VARCHAR(50),
    email VARCHAR(50),
    city VARCHAR(50)
)
GO

SELECT * FROM Student
GO

INSERT INTO student (name, email, city) VALUES ('Scott', 'scott@ef.com', 'Boston'),
											   ('Adam', 'adam@ef.com', 'Sydney'),
											   ('Tuan', 'tuan@ef.com', 'Vietnam')
GO

UPDATE student SET name ='Scott Desatnick', email = 'Scott.desatnick@ef.com', city='Bengaluru' WHERE _id =1
GO

INSERT INTO student (name, email, city) VALUES ('sdds', 'rrr@ef.com', 'ewe')
GO

DELETE FROM student where _id=4
GO

DBCC CHECKIDENT ('[student]', RESEED, 0);
GO
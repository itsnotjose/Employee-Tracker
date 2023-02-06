USE employee_db

INSERT INTO department (name)
VALUES 
("sales"),
("engineering"),
("finance"),
("legal");

INSERT INTO role (department_id, title, salary)
VALUES 
(1, "sales lead", 100000),
(1, "salesperson", 80000),
(2, "software engineering", 150000),
(2, "lead engineering", 130000),
(3, "account manger", 70000),
(3, "accountant", 50000),
(4, "legal team lead", 80000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("David", "Bond", 1, null),
("Talha", "Rollins", 2, 1),
("Richie", "Burton", 3, 1),
("Macie", "Bright", 4, null),
("Connie", "Campos", 5, 4),
("Otto", "Cain", 6, 4),
("Mitchell", "Gay", 7, 4);

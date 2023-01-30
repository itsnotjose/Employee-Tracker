USE employee_db
INSERT INTO department (name)
VALUES (sales),
(engineering),
(finance),
(legal);

INSERT INTO role (department_id, title, salary,)
VALUES (1, sales lead, 100,000),
(1, salesperson, 80,000),
(2, software engineering, 150,000),
(2, lead engineering, 130,000),
(3, account manger, 70,000),
(3, accountant, 50,000),
(4, legal team lead, 80,000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (David, Bond,1, ),
(Talha, Rollins, 2, null),
(Richie, Burton, 3, null),
(Macie, Bright, 4, null),
(Connie, Campos, 5, null),
(Otto, Cain, 6, null),
(Mitchell, Gay, 7, null)

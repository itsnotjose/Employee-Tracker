const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");


const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "employees_db",
});

function firstPrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "department",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "update employee role",
          "add role",
          "add an employee",
          "end",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.department) {
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          viewEmployees();
          break;

        case "add a department":
          addDepartment();
          break;

        case "update employee role":
          updateEmployee();
          break;

        case "add role":
          addRole();
          break;

        case "add an employee":
          addEmployee();
          break;

        case "End":
          connection.end();
          break;
      }
    });

  function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      console.table(res);
      firstPrompt();
    });
  }
}

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    firstPrompt();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    firstPrompt();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What department would you like to add?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET?",
        {
          name: answer.addDepartment,
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstPrompt();
        }
      );
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole_id",
        message: "What employee would you like to add?",
      },
      {
        type: "input",
        name: "addTitle",
        message: "What is their title?",
      },
    ])
    .then((answer) => {
      connection.query(
        "UPDATE employee SET? WHERE?",
        [
          {
            role_id: answer.addRole_id,
          },
          {
            id: answer.addEmployee_id,
          },
        ],

        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstPrompt();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole",
        message: "What role would you like to add?",
      },
      {
        type: "input",
        name: "addSalary",
        message: "What is their salary?",
      },
      {
        type: "input",
        name: "addDepartment",
        message: "What department are they in?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET?",
        {
          title: answer.addRole,
          salary: answer.addSalary,
          department_id: answer.addDepartment,
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstPrompt();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "First name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "Last name?",
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee's role?",
      },
      {
        type: "input",
        name: "managerId",
        message: "Employee's manager?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstPrompt();
        }
      );
    });
}
console.log(`Welcome to the employee tracker`);
firstPrompt();

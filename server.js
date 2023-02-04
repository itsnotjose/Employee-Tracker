
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
    
// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'jose12345',
    database: 'employees_db'
});



function firstPrompt() {
return inquirer
.prompt([
    {
        type: 'list',
        name: 'department',
        message: 'Which would you like to do?',
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "update employee Role",
            "add role",
            "add an employee",
            "end"]
    }
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
            updateEmployeeRole();
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
    }});

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
            message: "What department?"
        }

    ])
  .then((answer) => {
    connection.query(
        "INSERT INTO department SET?",
        {   
            name: answer.addDepartment
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                firstPrompt();
            }

    );
});
}

//! fix this later

function updateEmployeeRole() {
    inquirer
.prompt([
    {
        type: "list",
        name: "employee",
        message: "Which employee would you like to update?",
        choices: [
            "David Bond",
            "Talha Rollins",
            "Richie Burton",
            "Macie Bright",
            "Connie Campos",
            "Otto Cain",
            "Mitchell Gay"
        ]
        },
        {
            type: "input",
            name: "addRole",
            message: "What role?"
            },
            {
                type: "input",
                name: "addSalary",
                message: "What salary?"
                },
                {
                    type: "input",
                    name: "addDepartment", 
                    message: "What department?"
                }
            
    ])
.then((answer) => {
    connection.query(
        "UPDATE employee SET? WHERE?",
        {   
            title: answer.addRole,
            salary: answer.addSalary,
            department_id: answer.addDepartment
            },
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
        message: "What role?"
        },
        {
            type: "input",
            name: "addSalary",
            message: "What salary?"
            },
            {
                type: "input",
                name: "addDepartment", 
                message: "What department?"
            }

    ])
.then((answer) => {
    connection.query(
        "INSERT INTO role SET?",
        {   
            title: answer.addRole,
            salary: answer.addSalary,
            department_id: answer.addDepartment
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
        message: "First name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "Last name?"
            },
            {
                type: "input",
                name: "roleId",
                message: "What is the employee's role?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Employee's manager?"
                }

    ])
.then((answer) => {
    connection.query(
        "INSERT INTO employee SET ?",
        {   
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.managerId
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                firstPrompt();
            }

    );
});
}
console.log(`🅴🅼🅿🅻🅾🆈🅴🅴 🆃🆁🅰🅲🅺🅴🆁`)
firstPrompt();
    
    
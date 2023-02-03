
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
    
// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
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
            "update Employee Role",
            "add Role",
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

        case "update Employee Role":
            updateEmployeeRole();
            break;

        case "add Role":
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

firstPrompt();
    
    
//#!/usr/bin/env node
import inquirer from "inquirer"

var todo: any = []
async function todoList() {
    
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "job",
        message: "put your work here",

    },
    {
        type: "list",
        name: "isDone",
        message: "select the work is completed or not",
        choices: ["True", "False"]
    }
])

let work = {
    job: answer.job,
    isDone: answer.isDone
}

todo.push(work)
}

async function wait() {
    do {await todoList()
        var answer = await inquirer.prompt([
            {
                type: "list",
                name: "continue",
                message: "Do you want to add more?",
                choices: ["YES", "NO"]
            }
        ])
        var AC = answer.continue == "YES"
    }
    while (AC)
        console.log(todo)
}
await wait()

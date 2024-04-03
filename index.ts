#!/usr/bin/env node
import inquirer from "inquirer";

let my_balance = 6000;
let my_pin = 4567;

    let pin_check = await inquirer.prompt([
        { message: "Enter your pin", type: "number", name: "pin" },
    ]);

    if (pin_check.pin === my_pin) 
    
    {
        let operation = await inquirer.prompt([
            { message: "Select your operation", type: "list", name: "operation", choices: ["withdraw", "check balance"] },
        ]);

        if (operation.operation === "withdraw") 
        {
            let amount = await inquirer.prompt([
                { message: "Enter your amount", type: "number", name: "amount" },
            ]);
            if (amount.amount <= 50000 && amount.amount >= 500) 
            {
                my_balance -= amount.amount;
                console.log("Your remaining balance is " + my_balance);
            } 
            else 
            {
                console.log("Invalid amount. Withdrawal amount should be between 500 and 50000.");
            }
        } 
        
        else if (operation.operation === "check balance") {
            console.log("Your current balance is " + my_balance);
        }
    } 
    
    else     
    {
        console.log("Invalid Pin");
    }

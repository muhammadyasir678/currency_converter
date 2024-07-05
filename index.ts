#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright.bold("\n \t WElcome to 'CodeWithYasir' - Currency Converter\n"));


const currency: any = {
  USD: 1, // Base currency
  EUR: 0.92,
  BZD: 2.01,
  INR: 83.47,
  PKR: 277.97,
  NZD: 1.63,
  GBP: 0.78,
  YER: 250.38,
  SAR: 3.75,
  RSD: 107.97,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.blueBright("Enter From Currency"),
    type: "list",
    choices: [
      "USD",
      "EUR",
      "BZD",
      "INR",
      "PKR",
      "NZD",
      "GBP",
      "YER",
      "SAR",
      "RSD",
    ],
  },
  {
    name: "to",
    message: chalk.blueBright("Enter To Currency"),
    type: "list",
    choices: [
      "USD",
      "EUR",
      "BZD",
      "INR",
      "PKR",
      "NZD",
      "GBP",
      "YER",
      "SAR",
      "RSD",
    ],
  },
  {
    name: "amount",
    message: chalk.blueBright("Enter Your Amount"),
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(convertedAmount.toFixed(3)));

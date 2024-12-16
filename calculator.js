// calculator.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Simple Calculator');
console.log('=================');

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter an operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      let result;

      // Convert string input to numbers
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Perform calculation based on the operator
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            console.log('Error: Division by zero');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operator');
          rl.close();
          return;
      }

      console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
      rl.close();
    });
  });
});

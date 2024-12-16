const express = require('express');
const app = express();
const port = 4200;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the calculator form
app.get('/', (req, res) => {
  res.send(`
    <h1>Simple Calculator</h1>
    <form action="/calculate" method="POST">
      <label for="num1">First Number:</label>
      <input type="number" id="num1" name="num1" required><br><br>
      <label for="operator">Operator:</label>
      <select id="operator" name="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select><br><br>
      <label for="num2">Second Number:</label>
      <input type="number" id="num2" name="num2" required><br><br>
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Handle form submission
app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const operator = req.body.operator;
  const num2 = parseFloat(req.body.num2);
  let result;

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
      result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      break;
    default:
      result = 'Invalid operator';
  }

  res.send(`
    <h1>Calculation Result</h1>
    <p>${num1} ${operator} ${num2} = ${result}</p>
    <a href="/">Go Back</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});

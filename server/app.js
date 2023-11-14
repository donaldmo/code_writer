// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const port = 5000 | 5001; // You can choose a different port

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.post('/run-python', (req, res) => {
  const { code } = req.body;
  console.log(code)

  exec(`python -c "${code}"`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing Python code:', error);
      res.status(500).json({ output: 'Error executing Python code' });
      return;
    }

    res.json({ output: stdout || stderr });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}: http://localhost:${port}`);
});

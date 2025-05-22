const express = require('express');
const countStudents = require('./3-read_file_async');

function getStudentOutput(path) {
  return new Promise((resolve, reject) => {
    const logs = [];
    const originalLog = console.log;

    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    countStudents(path)
      .then(() => {
        console.log = originalLog;
        resolve(logs.join('\n'));
      })
      .catch((err) => {
        console.log = originalLog;
        reject(err);
      });
  });
}

const app = express();
const PORT = 1245;
const DB = process.argv[2];

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  let output = 'This is the list of our students\n';

  try {
    const result = await getStudentOutput(DB);
    output += result;
    res.send(output);
  } catch (err) {
    res.send(`${output}${err.message}`);
  }
});

app.listen(PORT);
module.exports = app;

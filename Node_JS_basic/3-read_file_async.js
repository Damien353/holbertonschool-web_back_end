const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // retirer en-tête

      const studentsByField = {};
      let total = 0;

      for (const line of lines) {
        const parts = line.split(',');
        if (parts.length >= 4) {
          const firstname = parts[0];
          const field = parts[3];

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstname);
          total += 1;
        }
      }

      // Afficher résultats
      console.log(`Number of students: ${total}`);
      for (const [field, names] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(); // résout promesse une fois tout affiché
    });
  });
}

module.exports = countStudents;

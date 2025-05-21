const fs = require('fs'); // module pour lire des fichiers

function countStudents(path) {
  try {
    // Lire contenu du fichier en texte
    const data = fs.readFileSync(path, 'utf-8');

    // Diviser texte en lignes
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Supprimer en tête (première ligne)
    const header = lines.shift();

    const studentsByField = {};
    let total = 0;

    // Parcourir lignes restantes
    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length < 4) continue; // ignorer si données incomplètes

      const firstname = parts[0];
      const field = parts[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstname);
      total += 1;
    }

    // Afficher résultats
    console.log(`Number of students: ${total}`);
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

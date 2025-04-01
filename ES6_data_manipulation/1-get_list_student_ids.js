export default function getListStudentIds(students) {
  // Vérifie si l'argument est un tableau
  if (!Array.isArray(students)) {
    return [];
  }
  // Utilise la méthode map pour extraire les id
  return students.map((student) => student.id);
}

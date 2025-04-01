export default function getStudentIdsSum(students) {
  // Utilisation de reduce pour calculer la somme des id
  return students.reduce((sum, student) => sum + student.id, 0);
}

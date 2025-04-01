export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants par ville
  const studentsInCity = students.filter(student => student.location === city);

  // Mettre à jour les notes des étudiants en fonction de newGrades
  return studentsInCity.map(student => {
    // Chercher la note du student dans newGrades
    const studentGrade = newGrades.find(grade => grade.studentId === student.id);

    // Si la note est trouvée, on l'ajoute, sinon on met 'N/A'
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A'
    };
  });
}

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
  // Vérifie si chaque valeur de l'array est dans le set
}

export default function cleanSet(set, startString) {
  // Filtrer éléments qui commencent par startString, puis garder la partie après startString
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    // Garder les éléments qui commencent par startString
    .map((value) => value.slice(startString.length));
    // Enlever startString du début de chaque élément
  
  // Retourner la chaîne de caractères formée par les valeurs séparées par un tiret
  return result.join('-');
}

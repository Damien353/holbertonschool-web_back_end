export default function updateUniqueItems(map) {
  // Vérifier si l'argument est bien une Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Parcourir la Map et mettre à jour les éléments dont la quantité est 1
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100); // Mettre la quantité à 100
    }
  });
}

export default function createInt8TypedArray(length, position, value) {
  // Crée un ArrayBuffer de la taille donnée (en octets)
  const buffer = new ArrayBuffer(length);

  // Crée un DataView sur cet ArrayBuffer
  const dataView = new DataView(buffer);

  // Vérifie si la position est valide
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Insère la valeur à la position spécifiée dans le DataView
  dataView.setInt8(position, value);

  return dataView;
}

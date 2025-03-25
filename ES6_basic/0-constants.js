// Modifie taskFirst pour utiliser const
export function taskFirst() {
    const task = 'I prefer const when I can.'; // Utilisation de const car la variable ne change pas
    return task;
  }
  
  // Fonction qui renvoie une partie du texte
  export function getLast() {
    return ' is okay';
  }
  
  // Modifie taskNext pour utiliser let
  export function taskNext() {
    let combination = 'But sometimes let'; // Utilisation de let car la variable va être modifiée
    combination += getLast(); // On ajoute une autre valeur à combination
  
    return combination;
  }
  
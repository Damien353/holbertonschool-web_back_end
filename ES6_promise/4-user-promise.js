export default function signUpUser(firstName, lastName) {
  // Retourne une Promise résolue avec l'objet contenant les paramètres
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

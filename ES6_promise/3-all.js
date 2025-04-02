import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Exécution des deux Promises en parallèle avec Promise.all()
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Affichage des informations extraites des résultats des Promises
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      // Si une erreur survient affiche ce message
      console.log('Signup system offline');
    });
}

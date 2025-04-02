import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Exécution des deux Promises en parallèle avec Promise.all()
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Si une erreur survient affiche ce message
      console.log('Signup system offline');
    });
}

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Si success est true on résout la Promise avec un objet
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Si success est false on rejette la Promise avec un message d'erreur
      reject(new Error('The fake API is not working currently'));
    }
  });
}

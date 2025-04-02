export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Réponse de l'API reçue !");
    }, 2000);
  });
}

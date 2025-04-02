export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Si la Promise est résolue, on retourne l'objet avec le statut et le message
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // Si la Promise est rejetée, on retourne une erreur vide
      console.log('Got a response from the API');
      return new Error();
    });
}

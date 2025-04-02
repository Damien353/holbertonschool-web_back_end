export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction(); // Exécution de mathFunction
    queue.push(result); // Ajout du résultat à la queue si pas d'erreur
  } catch (error) {
    queue.push(error.message); // Ajout du message d'erreur si une exception est levée
  }

  queue.push('Guardrail was processed'); // Ajout du message final dans tous les cas

  return queue;
}

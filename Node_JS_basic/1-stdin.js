process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
  process.stdout.write(`Your name is: ${name}\n`);
}});

// Détecter quand l'entrée standard est fermée
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

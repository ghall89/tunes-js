import { getShuffleState } from './dist/index.js';

async function main() {
  const result = await getShuffleState();

  console.log(result);
}

main();

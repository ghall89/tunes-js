import { getPlayerState } from "./src/index.ts";

async function main() {
  const result = await getPlayerState();

  console.log(result);
}

main();

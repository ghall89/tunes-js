import { getNowPlaying } from "./src/index.ts";

async function main() {
  const result = await getNowPlaying();

  console.log(result);
}

main();

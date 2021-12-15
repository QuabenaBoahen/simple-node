const favorite_series = process.en.FAVORITE_SERIES;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`No series beats $favorite_series`);
    await sleep(5000);
  }
}

main();

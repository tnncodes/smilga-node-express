const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);  

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf8');
    console.log(first);
    await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first}`)
  } catch (error) {
    console.log(error);
  }
}

start();
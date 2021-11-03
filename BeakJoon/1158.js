const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  main(line);
}).on('close', () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
  const [N, K] = line.split(' ').map(Number);
  const people = new Array(N).fill(0).map((_, i) => i + 1);
  let answer = '<';

  while (people.length) {
    for (let i = 0; i < K; i++) {
      people.push(people.shift());
    }

    const dead = people.pop();
    answer += people.length === 0 ? `${dead}>` : `${dead}>`;
  }
  console.log(answer);
};

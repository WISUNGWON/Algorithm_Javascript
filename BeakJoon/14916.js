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
  const money = Number(line);
  let restMoney = money % 5;
  let maxFive = Math.floor(money / 5);
  let leftCoin = maxFive;
  while (restMoney !== 0) {
    console.log(maxFive, ' : max');
    console.log(leftCoin, ' : left');
    console.log(restMoney, ' : money');
    if (maxFive < 0) {
      leftCoin = -1;
      break;
    }

    if (restMoney % 2 === 0) {
      leftCoin += restMoney / 2;
      restMoney = 0;
    } else {
      maxFive--;
      leftCoin--;
      restMoney += 5;
    }
  }

  console.log(leftCoin, ' : 답');
};

main(13);
main(14);

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
    let answer ="";
    for(let i = 2; i < input.length; i += 2) {
        let stockPrices = input[i].split(' ').map(Number);
        let profit = 0;
        let maxStockPrice = 0;
        for(let j = stockPrices.length - 1; j >= 0; j--) {
            const stock = stockPrices[j]
            if (stock > maxStockPrice) {
                maxStockPrice = stock;
            }
            profit += maxStockPrice - stock;
        }

        answer += profit + "\n";
    }
    
    console.log(answer);
}

solution()
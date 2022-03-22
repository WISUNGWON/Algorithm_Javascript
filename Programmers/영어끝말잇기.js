function solutionOf영어끝말잇기(n, words) {
  let answer = [];

  const getAnswer = (n, wordIndex) => {
    const firstLooserNumber = (wordIndex + 1) % n;
    return [firstLooserNumber === 0 ? n : firstLooserNumber, Math.ceil((wordIndex + 1) / n)];
  };

  const wordMap = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordMap.get(word)) {
      answer = getAnswer(n, i);
      break;
    } else {
      wordMap.set(word, 1);
    }

    if (i !== 0) {
      const prevWord = words[i - 1];
      if (word[0] !== prevWord[prevWord.length - 1]) {
        answer = getAnswer(n, i);
        break;
      }
    }
  }
  if (answer.length === 0) {
    return [0, 0];
  }
  return answer;
}

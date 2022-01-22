// 프로그래머스 - 모음사전

import { isAnyArrayBuffer } from 'util/types';

function solutionOf모음사전1(word: string): number {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const wordArr = [];
  const makeWordArr = (ongoingWord: string) => {
    if (ongoingWord.length === 5) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      const curWord = ongoingWord + vowels[i];
      wordArr.push(curWord);
      makeWordArr(curWord);
    }
  };

  makeWordArr('');
  return wordArr.indexOf(word) + 1;
}

function solutionOf모음사전2(word: string) {
  return word
    .split('')
    .reduce((prev, curr, i) => prev + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(curr) + 1, 0);
}

describe('solution of 모음사전', () => {
  test('solution1', () => {
    expect(solutionOf모음사전1('AAAAE')).toBe(6);
  });

  test('solution1', () => {
    expect(solutionOf모음사전2('AAAAI')).toBe(7);
  });
});

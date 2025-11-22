import {LETTER_POOL} from '../test/adagrams.test.js';

export const drawLetters = () => {
  // Implement this method for wave 1
  const newLetterPool = Object.assign({}, LETTER_POOL);
  const keyList = Object.keys(newLetterPool);
  const tenLetter = [];

  while (tenLetter.length <= 9) {
    let ranKey = Math.floor(Math.random() * (keyList.length));
    let ranLetter = keyList[ranKey];
    if (newLetterPool[ranLetter] !== 0) {
      tenLetter.push(ranLetter);
      newLetterPool[ranLetter] -= 1;
    } else if (newLetterPool[ranLetter] === 0){
      continue;
    }
  }
  return tenLetter;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputDict = {};
  for (const charOne of input) {
    inputDict[charOne] = false;
  }

  for (const charOne of input) {
    if (!(lettersInHand.includes(charOne))){
      inputDict[charOne] = false;
    } else {
      inputDict[charOne] = true;
    }
  }

  const 
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
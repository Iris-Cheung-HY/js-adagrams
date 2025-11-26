import {
  LETTER_POOL, 
  LETTER_SCORE,
} from '../src/constValuesSource.js';

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
  // if input then remove form lettersInHand
  const inputCopy = Object.assign([], input);
  const lettersInHandCopy = Object.assign([], lettersInHand)

  for (const letter of input) {
    if (lettersInHandCopy.includes(letter)) {
      const inpValue = inputCopy.indexOf(letter);
      inputCopy.splice(inpValue, 1);
      const letValue = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(letValue, 1);
    }
  }

  if (inputCopy.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const scoreWord = (word) => {
  let score = 0;

  for (const letter of word.toUpperCase()) {
    score += LETTER_SCORE[letter];
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  let wordLength = 0;
  let highestWord = '';

  for (const word of words) {
    let score = scoreWord(word);
    let wLen = word.length;
    if (score > highestScore) {
      highestScore = score;
      wordLength = wLen;
      highestWord = word;
    } else if (score === highestScore) {
      if (wLen === wordLength) {
        continue;
      } else if (wLen > wordLength && wLen >= 10) {
        highestScore = score;
        wordLength = wLen;
        highestWord = word;
      } else if (wLen < wordLength && wordLength < 10) {
        highestScore = score;
        wordLength = wLen;
        highestWord = word;
      }
    };
  }
  return {'word': highestWord, 'score': highestScore};
};

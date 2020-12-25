const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (sentence = '') => {
  if (typeof sentence !== 'string')
    throw new TypeError('Input needs to be a string (preferably a sentence).');

  const letters = sentence.toLowerCase().split('');

  return lowercaseLetters.every(letter => letters.includes(letter));
};

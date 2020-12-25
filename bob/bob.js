const conditionList = [
  { conditions: [isEmpty], answer: 'Fine. Be that way!' },
  { conditions: [isYelled, isQuestion], answer: 'Calm down, I know what I\'m doing!' },
  { conditions: [isQuestion], answer: 'Sure.' },
  { conditions: [isYelled], answer: 'Whoa, chill out!' },
  { conditions: [noop], answer: 'Whatever.' }
]

export const hey = message => {
  if (typeof message !== 'string') throw new TypeError('Message needs to be a string');

  return conditionList
      .find(({ conditions }) => conditions.every(c => c(message)))
      .answer
}

function isYelled() {
  // dunno
}

function isQuestion(message) {
  const QUESTION_REGEXP = RegExp('[?]$');
  return QUESTION_REGEXP.test(message);
}

function isEmpty(message) {
  const EMPTY_REGEXP = RegExp('^$');
  return EMPTY_REGEXP.test(message);
}

function noop() {
  return true
}

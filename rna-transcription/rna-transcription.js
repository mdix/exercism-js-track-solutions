const dnaRnaMapping = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

class RnaTranscriber {
  toRna(dna) {
    const validInput = Object.keys(dnaRnaMapping).join('')
    const invalidInputRegEx = new RegExp('[^' + validInput + ']', 'g')

    if (dna.match(invalidInputRegEx)) throw new Error('Invalid input')

    return dna.split('').map(nucleotid => dnaRnaMapping[nucleotid]).join('')
  }
}

module.exports = RnaTranscriber

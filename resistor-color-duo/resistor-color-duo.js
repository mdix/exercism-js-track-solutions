export const decodedValue = (encodedValuesList, numberOfValuesToDecode = 2) => {
  if (!Array.isArray(encodedValuesList))
    throw new TypeError('encodedValuesList needs to be an Array.');

  if (isNaN(numberOfValuesToDecode) || typeof numberOfValuesToDecode !== 'number')
    throw new TypeError('numberOfValuesToDecode needs to be a Number.');

  return Number(
    encodedValuesList
      .slice(0, numberOfValuesToDecode)
      .map(colorName => colorNameToValue(colorName))
      .join('')
  );
};

function colorNameToValue(colorName) {
  if (!(colorName && typeof colorName === 'string'))
    throw new TypeError('colorName needs to be a non empty String');

  if (!Object.prototype.hasOwnProperty.call(COLOR_TO_VALUE_MAP, colorName))
    throw new RangeError(`Unknown color name. Supported values: ${Object.keys(COLOR_TO_VALUE_MAP).join(', ')}`);

  return COLOR_TO_VALUE_MAP[colorName];
}

const COLOR_TO_VALUE_MAP = {
  black:  0,
  brown:  1,
  red:    2,
  orange: 3,
  yellow: 4,
  green:  5,
  blue:   6,
  violet: 7,
  grey:   8,
  white:  9
};
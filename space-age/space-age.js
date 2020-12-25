export const age = (planet, ageInSeconds) => {
  if (!(planet && typeof planet === 'string'))
    throw new TypeError('planet needs to be a non empty string');

  if (!Object.prototype.hasOwnProperty.call(YEAR_IN_SECONDS, planet))
    throw new RangeError(`Unknown planet. Supported: ${Object.keys(YEAR_IN_SECONDS).join(', ')}`);

  if (isNaN(ageInSeconds) || typeof ageInSeconds !== 'number')
    throw new TypeError('ageInSeconds needs to be a number');

  return Number((ageInSeconds / YEAR_IN_SECONDS[planet]).toFixed(FRACTION_DIGITS));
};

const FRACTION_DIGITS = 2;

const EARTH_YEAR_DAYS = 365.25;
const EARTH_YEAR_SECONDS_PER_DAY = 86400;
const EARTH_YEAR_LENGTH_SECONDS = EARTH_YEAR_DAYS * EARTH_YEAR_SECONDS_PER_DAY;

const YEAR_IN_SECONDS = {
  mercury: EARTH_YEAR_LENGTH_SECONDS * 0.2408467,
  venus:   EARTH_YEAR_LENGTH_SECONDS * 0.61519726,
  earth:   EARTH_YEAR_LENGTH_SECONDS,
  mars:    EARTH_YEAR_LENGTH_SECONDS * 1.8808158,
  jupiter: EARTH_YEAR_LENGTH_SECONDS * 11.862615,
  saturn:  EARTH_YEAR_LENGTH_SECONDS * 29.447498,
  uranus:  EARTH_YEAR_LENGTH_SECONDS * 84.016846,
  neptune: EARTH_YEAR_LENGTH_SECONDS * 164.79132,
};
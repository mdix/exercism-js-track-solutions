const GIGASECOND = 10e11;

export const gigasecond = (date) => {
  if (!(date instanceof Date)) throw new TypeError('date needs to be of type Date.');

  return new Date(date.getTime() + GIGASECOND);
};
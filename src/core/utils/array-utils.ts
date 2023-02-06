export const mapArrayWithCommas = (array: string[]): string => {
  return array.reduce((acc, cur) => acc + ', ' + cur);
};

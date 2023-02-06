export const mapArrayWithCommas = (array: string[]): string => {
  let output = '';
  array.map((el, i, a) => {
    output += el;
    if (i !== a.length - 1) {
      output += ', ';
    }
  });
  return output;
};

export const pad = (str: string, length: number, char: string) => {
  while (str.length < length) {
    str = char + str;
  }
  return str;
};

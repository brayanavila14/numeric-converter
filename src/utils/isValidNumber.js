const isValidNumber = (num, base) => {
  switch (base) {
    case 'decimal':
      return /^-?\d+(\.\d+)?$/.test(num);
    case 'binario':
      return /^[01]+$/.test(num);
    case 'octal':
      return /^[0-7]+$/.test(num);
    case 'hexadecimal':
      return /^[0-9a-fA-F]+$/.test(num);
    default:
      return false;
  }
};

export default isValidNumber;
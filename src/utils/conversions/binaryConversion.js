const binaryConversion = ( number, toBase ) => {
    let converted;
    switch (toBase) {
        case 'decimal':
            converted = parseInt(number, 2).toString(10);
            break;
        case 'octal':
            converted = parseInt(number, 2).toString(8);
            break;
        case 'hexadecimal':
            converted = parseInt(number, 2).toString(16);
            break;
        default:
            converted = number;
    }
    return converted;
}
export default binaryConversion;
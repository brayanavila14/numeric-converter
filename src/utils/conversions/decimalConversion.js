const decimalConversion = ( number, toBase ) => {
    let converted;
    switch (toBase) {
        case 'binario':
            converted = parseInt(number, 10).toString(2);
            break;
        case 'octal':
            converted = parseInt(number, 10).toString(8);
            break;
        case 'hexadecimal':
            converted = parseInt(number, 10).toString(16);
            break;
        default:
            converted = number;
    }
    return converted;
}
export default decimalConversion;
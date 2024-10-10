const hexadecimalConversion = ( number, toBase ) => {
    let converted;
    switch (toBase) {
        case 'decimal':
            converted = parseInt(number, 16).toString(10);
            break;
        case 'binario':
            converted = parseInt(number, 16).toString(2);
            break;
        case 'octal':
            converted = parseInt(number, 16).toString(8);
            break;
        default:
            converted = number;
    }
    return converted;
}
export default hexadecimalConversion;
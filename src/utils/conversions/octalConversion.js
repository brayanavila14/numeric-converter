const octalConversion = ( number, toBase ) => {
    let converted;
    switch (toBase) {
        case 'decimal':
            converted = parseInt(number, 8).toString(10);
            break;
        case 'binario':
            converted = parseInt(number, 8).toString(2);
            break;
        case 'hexadecimal':
            converted = parseInt(number, 8).toString(16);
            break;
        default:
            converted = number;
    }
    return converted;
}
export default octalConversion;
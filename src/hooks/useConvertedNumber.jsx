import { useState, useEffect } from 'react';
import { isValidNumber } from '../utils/isValidNumber';
import { decimalConversion, binaryConversion, octalConversion, hexadecimalConversion } from '../utils/conversions';

const systemInfo = {
    decimal: 'Por favor ingrese un número entero',
    binario: 'Por favor ingrese 1 y 0',
    octal: 'Por favor ingrese números del 0 al 7',
    hexadecimal: 'Por favor ingrese números y letras de la A a la F',
};

const useConvertedNumber = (number, fromBase, toBase) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Si alguno de los campos está vacío, resetea el resultado y error
        if (!number || !fromBase || !toBase) {
            setResult(null);
            setError(null);
            return;
        }

        // Resetea el error
        setError(null);

        // Validar si el número ingresado es válido según la base de origen
        if (!isValidNumber(number, fromBase)) {
            setResult(null);
            setError(systemInfo[fromBase]);
            return;
        }

        // Realizar la conversión
        switch (fromBase) {
            case 'decimal':
                setResult(decimalConversion(number, toBase));
                break;
            case 'binario':
                setResult(binaryConversion(number, toBase));
                break;
            case 'octal':
                setResult(octalConversion(number, toBase));
                break;
            case 'hexadecimal':
                setResult(hexadecimalConversion(number, toBase));
                break;
            default:
                setResult(number);
        }
    }, [number, fromBase, toBase]);

    return { result, error };
};

export default useConvertedNumber;

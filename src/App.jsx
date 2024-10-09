import { useState } from 'react';

const App = () => {
  const [originSystem, setOriginSystem] = useState('');
  const [destinationSystem, setDestinationSystem] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleOriginSystemChange = (event) => {
    setOriginSystem(event.target.value);
    setInputValue(''); // Reset input value when origin system changes
  };

  const handleDestinationSystemChange = (event) => {
    setDestinationSystem(event.target.value);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    convertValue(inputValue, originSystem, destinationSystem);
  };

  const convertValue = (inputValue, originSystem, destinationSystem) => {
    let outputValue = '';
    switch (originSystem) {
      case 'decimal':
        outputValue = convertFromDecimal(inputValue, destinationSystem);
        break;
      case 'binary':
        outputValue = convertFromBinary(inputValue, destinationSystem);
        break;
      case 'octal':
        outputValue = convertFromOctal(inputValue, destinationSystem);
        break;
      case 'hexadecimal':
        outputValue = convertFromHexadecimal(inputValue, destinationSystem);
        break;
      default:
        outputValue = 'Invalid origin system';
    }
    setOutputValue(outputValue);
  };

  const convertFromDecimal = (inputValue, destinationSystem) => {
    // Implement conversion from decimal to destination system
  };

  const convertFromBinary = (inputValue, destinationSystem) => {
    // Implement conversion from binary to destination system
  };

  const convertFromOctal = (inputValue, destinationSystem) => {
    // Implement conversion from octal to destination system
  };

  const convertFromHexadecimal = (inputValue, destinationSystem) => {
    // Implement conversion from hexadecimal to destination system
  };

  return (
    <div className="max-w-md mx-auto my-4 p-4 pt-6 md:p-6 lg:p-12 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Number Converter</h1>
      <form>
        <label className="block mb-2">
          Origin System:
          <select
            value={originSystem}
            onChange={handleOriginSystemChange}
            className="block w-full pl-10 text-sm text-gray-700"
          >
            <option value="">Select origin system</option>
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="hexadecimal">Hexadecimal</option>
          </select>
        </label>
        <br />
        <label className="block mb-2">
          Destination System:
          <select
            value={destinationSystem}
            onChange={handleDestinationSystemChange}
            className="block w-full pl-10 text-sm text-gray-700"
          >
            <option value="">Select destination system</option>
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="hexadecimal">Hexadecimal</option>
          </select>
        </label>
        <br />
        <label className="block mb-2">
          Input Value:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            disabled={!originSystem}
            className="block w-full pl-10 text-sm text-gray-700"
          />
        </label>
        <br />
        <p className="text-lg mb-4">Output Value: {outputValue}</p>
      </form>
    </div>
  );
};
export default App;
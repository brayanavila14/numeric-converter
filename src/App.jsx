import { useState } from 'react';
import { useConvertedNumber } from './hooks/useConvertedNumber';

export default function App() {
  const [fromBase, setFromBase] = useState('decimal');
  const [toBase, setToBase] = useState('binario');
  const [number, setNumber] = useState('');
  const { error, result } = useConvertedNumber(fromBase, toBase, number);

  return (
    <>
      <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4">Conversor de Sistemas Numéricos</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="fromBase" className="block text-sm font-medium text-gray-700">Desde</label>
            <select
              id="fromBase"
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="decimal">Decimal</option>
              <option value="binario">Binario</option>
              <option value="octal">Octal</option>
              <option value="hexadecimal">Hexadecimal</option>
            </select>
          </div>
          <div>
            <label htmlFor="toBase" className="block text-sm font-medium text-gray-700">Hasta</label>
            <select
              id="toBase"
              value={toBase}
              onChange={(e) => setToBase(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="decimal">Decimal</option>
              <option value="binario">Binario</option>
              <option value="octal">Octal</option>
              <option value="hexadecimal">Hexadecimal</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">Número</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Ingresa un número"
            className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center min-h-[40px]" aria-live="polite">
          {result !== null ? (
            <span className="text-gray-700 font-medium">
              <span className="mr-2">Resultado:</span>
              <span className="text-lg font-bold">→ {result}</span>
            </span>
          ) : (
            <span className="text-gray-400 font-medium">Selecciona los sistemas de origen y destino e ingresa un número</span>
          )}
        </div>
      </div>
      <footer className="mt-10 text-center">
        <p className="text-sm text-gray-600">Creado por <a href="https://brayanaviladev.vercel.app/" className="font-bold">BrayDev</a></p>
      </footer>
    </>
  );
}

'use client'
import React from 'react';

const TablaSimbolosBuscar = ({ buscarNombre, onInputChange, onBuscar }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Buscar símbolo:</h2>
      <div className="flex items-center"> 
        <input
          className="w-full border border-gray-300 rounded py-2 px-4 mr-2"
          type="text"
          placeholder="Ingrese el nombre del símbolo"
          value={buscarNombre}
          onChange={(e) => onInputChange('buscarNombre', e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => onBuscar(buscarNombre)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default TablaSimbolosBuscar;

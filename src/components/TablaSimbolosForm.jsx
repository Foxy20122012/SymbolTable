import React from 'react';

const TablaSimbolosForm = ({ entrada, onInputChange, onProcesar, onBuscar }) => {
  return (
    <div className="container mx-auto p">
      <h1 className="text-3xl font-bold m-10">Tabla de Símbolos</h1>
      <div className="flex items-center">
        <input
          className="w-full border border-gray-300 rounded py-2 px-4 mr-2"
          type="text"
          placeholder="Ingrese la entrada"
          value={entrada}
          onChange={(e) => onInputChange('entrada', e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={onProcesar}
        >
          Procesar
        </button>
        
      </div>
    </div>
  );
};

export default TablaSimbolosForm;

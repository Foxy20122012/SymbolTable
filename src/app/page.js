import '../styles/globals.css'
import TablaSimbolosPage from '@/components/TablaSimbolosPage';
import React from 'react';


const App = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 text-center m-10 ">Aplicación de Tabla de Símbolos</h1>
      <TablaSimbolosPage/>
    </div>
  );
};
 

export default App;

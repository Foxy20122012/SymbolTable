'use client'
'use client'
import React, { useState } from 'react';
import TablaSimbolosForm from '@/components/TablaSimbolosForm';
import TablaSimbolosLista from '@/components/TablaSimbolosLista';

const TablaSimbolosPage = () => {
  const [entrada, setEntrada] = useState('');
  const [tablaSimbolos, setTablaSimbolos] = useState([]);

  const procesarEntrada = () => {
    const simbolos = [];
    const entradaSplit = entrada.split(/(\+|-|\*|\/|\(|\)|,|;|\s+)/);
    let index = 0;
    entradaSplit.forEach((token) => {
      const trimmedToken = token.trim();
      if (trimmedToken !== '') {
        const simbolo = {
          numeroRegistro: ++index,
          nombreIdentificador: trimmedToken,
          tipoIdentificador: obtenerTipoIdentificador(trimmedToken),
          ambito: obtenerAmbito(trimmedToken),
        };
        simbolos.push(simbolo);
      }
    });

    setTablaSimbolos(simbolos);
  };

  const obtenerTipoIdentificador = (token) => {
    if (esOperador(token)) {
      return 'Operador';
    }
    if (esParentesis(token)) {
      return 'Paréntesis';
    }
    if (esCaracterEspecial(token)) {
      return 'Carácter Especial';
    }
    return 'Variable';
  };

  const esOperador = (token) => {
    const operadores = ['+', '-', '*', '/', '%', '>', '<', ''];
    return operadores.includes(token);
  };

  const esParentesis = (token) => {
    return token === '(' || token === ')';
  };

  const esCaracterEspecial = (token) => {
    const caracteresEspeciales = [',', ';', ':', '"', "'", '!', '#', '$', '&'];
    const letrasIndividuales = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return caracteresEspeciales.includes(token) || letrasIndividuales.includes(token.toLowerCase());
  };

  const obtenerAmbito = (token) => {
    return 'Ámbito';
  };

  const onInputChange = (field, value) => {
    if (field === 'entrada') {
      setEntrada(value);
    }
  };

  const onBuscar = (identificador) => {
    // Lógica para buscar en la tabla de símbolos por identificador
    const resultados = tablaSimbolos.filter(simbolo => simbolo.nombreIdentificador.toLowerCase() === identificador.toLowerCase());
    console.log(resultados);
  };

  return (
    <div>
      <TablaSimbolosForm
        entrada={entrada}
        onInputChange={onInputChange}
        onProcesar={procesarEntrada}
        onBuscar={onBuscar}
      />
      {tablaSimbolos.length > 0 && <TablaSimbolosLista tablaSimbolos={tablaSimbolos} />}
    </div>
  );
};

export default TablaSimbolosPage;

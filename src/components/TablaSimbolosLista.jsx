import React from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';

const TablaSimbolosLista = ({ tablaSimbolos }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Número de Registro', accessor: 'numeroRegistro' },
      { Header: 'Nombre del Identificador', accessor: 'nombreIdentificador' },
      { Header: 'Tipo de Identificador', accessor: 'tipoIdentificador' },
      { Header: 'Ámbito', accessor: 'ambito' },
    ],
    []
  );

  const data = React.useMemo(() => tablaSimbolos, [tablaSimbolos]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Tabla de Símbolos:</h2>
      <input
        className="w-full border border-gray-300 rounded py-2 px-4 mb-4"
        type="text"
        placeholder="Buscar"
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <div className='w-full flex xs:justify-center container '>
      <table {...getTableProps()} className="w-full border border-gray-300 xs:w-full  text-center">
        <thead className="bg-blue-500 text-center ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 px-4 font-bold text-center"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t border-gray-300">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TablaSimbolosLista;

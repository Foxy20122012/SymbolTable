import '../../styles/globals.css'

const Documentación =()=>{
    return(
        <div className="container mx-auto p-4 m-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Documentación del Proyecto</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <p className='py-4 text-justify'> 
          Los compiladores desempeñan un papel esencial al convertir el código escrito en un lenguaje de programación en un formato que
           pueda ser entendido y ejecutado por una computadora. Durante este proceso, se realiza un análisis detallado del código para
            comprender su estructura y significado.
          </p>

          <p className='text-justify'>
            El análisis léxico se encarga de descomponer el código en unidades más pequeñas llamadas "tokens", como palabras
            clave, nombres de variables y operadores. Aquí es donde la tabla de símbolos entra en juego, ya que se utiliza 
            para almacenar y organizar estos tokens, asignándoles identificadores únicos y registrando información relevante, 
            como su nombre, tipo y alcance. Esto permite acceder de manera eficiente a estos elementos durante el análisis.
          </p>
          <p className='py-4 text-justify'>
            A continuación, el análisis sintáctico examina la estructura gramatical del código utilizando reglas específicas
             definidas por el lenguaje de programación. Durante este proceso, se hace uso de la tabla de símbolos para verificar 
             que los identificadores se utilicen correctamente, asegurándose de que coincidan con los tipos esperados y estén 
             declarados en los lugares adecuados.
          </p>
          <p className='text-justify'>
            En resumen, implementar esta tabla de símbolos me brindará una comprensión más clara y práctica de cómo los compiladores 
            llevan a cabo el análisis del código, lo que me permitirá entender mejor cómo se gestionan los identificadores y su 
            importancia en la creación de programas correctamente estructurados y funcionales.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
          <ul className="list-disc pl-8">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>Librerias</li>
            <li>React icons</li>
            <li>React Table</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Librerías Utilizadas</h2>
          <ul className="list-disc pl-8">
            <li>React icons</li>
            <li>React Table</li>           
          </ul>
        </section>
  
      </div>
    )
}

export default Documentación;
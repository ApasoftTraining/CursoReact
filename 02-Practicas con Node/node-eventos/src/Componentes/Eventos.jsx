import React from 'react'

function Eventos({salario_total, impuestos}) {
    let resultado=0;
    function calcularSalario() {

        resultado=(salario_total -(salario_total * impuestos/100));
    
      }
    
  return (
    <div>
        <p>Salario Total={salario_total}</p>
        <p>Impuestos {impuestos}</p>
        <p> Resultado {resultado}</p>

         <button onClick={calcularSalario}>Calcular Salario</button>
    </div>
  )
}

export default Eventos
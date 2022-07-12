import React from 'react'

function Salario({salario_total, impuestos}) {
    //Inicializar Resultado
    let resultado=0;

    //Funcion Resultado
    function calcularSalario(evento) {
        console.log(evento);
        resultado=(salario_total -(salario_total * impuestos/100));
        document.getElementById("resultado").innerHTML=resultado
      }
    
  return (
    <div>
         { /*Imprimir resultatos */}
        <p>Salario Total={salario_total}</p>
        <p>Impuestos {impuestos}</p>
        <p id="resultado"> Resultado </p>

        { /*Calcular Salario 
           en HTML  onClick="calcularSalario" */}
         <button onClick={(e)=>calcularSalario(e)}>Calcular Salario</button>
    </div>
  )
}

export default Salario
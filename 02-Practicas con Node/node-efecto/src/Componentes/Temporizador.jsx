import React,{useEffect,useState} from 'react'

function Temporizador() {

   const [contador, setcontador] = useState(0)


  useEffect(() => {
    //Operacion a realizar  
    setTimeout(() => {
        setcontador(contador+1);
    }, 1000);
  })
   //Condicion de disparo




  return (
    <div>Temporizador
        <p>{contador}</p>
    </div>
  )
}

export default Temporizador
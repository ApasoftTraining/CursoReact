import React from 'react'

function Coche({matricula,precio}) {
  return (
    <div>
        <h2>Matricula { matricula} </h2>
        <h3>Y el precio es { precio} </h3>
    </div>
  )
}

export default Coche
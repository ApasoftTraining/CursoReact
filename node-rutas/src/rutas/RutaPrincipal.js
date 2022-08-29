import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Principal from '../paginas/Principal'
import Federacion from '../paginas/StarTrek/Federacion'
import Klingon from '../paginas/StarTrek/Klingon'
import Imperio from '../paginas/StarWars/Imperio'
import Rebeldes from '../paginas/StarWars/Rebeldes'

import BarraNavegacion from '../ui/BarraNavegacion'

function RutaPrincipal() {
  return (
    <div>     
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/federacion" element={<Federacion />} />
        <Route path="/klingon" element={<Klingon />} />
        <Route path="/imperio" element={<Imperio />} />
        <Route path="/rebeldes" element={<Rebeldes />} />       
      </Routes>     
     
    </div>
    

  )
}

export default RutaPrincipal
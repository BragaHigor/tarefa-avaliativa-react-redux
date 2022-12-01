import React, { useState } from 'react';
import './App.css';

import Desafio from './components/Desafio'
import Numero from './components/Numero'
import Propriedades from './components/Propriedades'
import Sorteio from './components/Sorteio'
import Recesso from './components/Recesso'

function App() {

  const [min] = useState(10);
  const [max, setMax] = useState(0);
  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 2º BIMESTRE</h1>

      <div className='linha'>
        <Desafio>
        </Desafio>
      </div>

      <div className='linha'>
        <Numero max={max} onMaxChanged={setMax}></Numero>
      </div>
      <div className='linha'>
        <Propriedades 
          titulo="QUAL SUA NOTA?" 
          aluno="Higor Braga da Silva" 
          max={max}>
        </Propriedades>
      </div>
      <div className='linha'>
        <Sorteio  min={0} max={max}></Sorteio>
      </div>
      <div className='linha'>
        <Recesso min={min} max={max}></Recesso>
      </div>

    

    </div>
  );
}

export default App;

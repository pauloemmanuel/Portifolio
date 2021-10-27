import React from 'react';
import {AreaNavegacao} from './styled';

const Navegacao = ()=> {
  return(
<AreaNavegacao className='AreaNavegacao'>

  <div className='navegacao'>
    <div className='img'></div>
  </div>
  <div className='nav-bar'>
    <ul>
      <li className='selected'>Sobre Mim</li>
      <li >Formação</li>
      <li>Projetos</li>
    </ul>
  </div>
</AreaNavegacao>
  );
}

export default Navegacao;
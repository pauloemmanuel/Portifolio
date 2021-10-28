import React from 'react';

import {AreaNavegacao} from './styled';
import {connect} from 'react-redux';
import { changePage } from '../../actions/UserActions';

const Navegacao = (props)=> {


  function limpar(){
    document.getElementById('/sobre').className = '';
    document.getElementById('/education').className = '';
    document.getElementById('/projects').className = '';
    document.getElementById('/know-how').className = '';
  }
const mudarPagina = (id)=>{
  limpar();
  document.getElementById(id).className = 'selected';
  props.changePage(id)


}
 

  return(
<AreaNavegacao className='AreaNavegacao'>


  <div className='navegacao'>
    <div className='img'></div>
  </div>
  <div className='nav-bar'>

    <ul id='menu'>
      <li key='sobre' id='/sobre'  onClick={(e)=>{mudarPagina(e.target.id)}} className='selected'>Sobre Mim </li>
      <li  key='educacao' id='/education' onClick={(e)=>{mudarPagina(e.target.id)}} className=''>Formação</li>
      <li  key='projetos' id='/projects'  onClick={(e)=>{mudarPagina(e.target.id)}} className=''>Projetos</li>
      <li   key='tecnologias' id='/know-how'  onClick={(e)=>{mudarPagina(e.target.id)}} className=''>Tecnologias</li>
    </ul>
  </div>
</AreaNavegacao>
  );
}

const mapStateToProps =(state)=>( {
 page:state.page.pagina_exibida
});
const mapActionsToProps = {
  changePage
}

export default connect(mapStateToProps,mapActionsToProps)(Navegacao);
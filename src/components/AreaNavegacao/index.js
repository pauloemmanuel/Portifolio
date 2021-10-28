import React,{useEffect} from 'react';

import {AreaNavegacao} from './styled';
import {connect} from 'react-redux';
import { changePage } from '../../actions/UserActions';

const Navegacao = (props)=> {


  function limpar(){
    document.getElementById('/').className='';
    document.getElementById('/education').className='';
    document.getElementById('/projects').className='';
    document.getElementById('/know-how').className='';
  }
  const mudarPagina = useEffect(()=>{
    limpar();

  },[props.page]);

  return(
<AreaNavegacao className='AreaNavegacao'>


  <div className='navegacao'>
    <div className='img'></div>
  </div>
  <div className='nav-bar'>

    <ul id='menu'>
      <li id='/'  onClick={(e)=>{props.changePage(e.target.id)}} className='selected'>Sobre Mim </li>
      <li id='/education' onClick={(e)=>{props.changePage('/education')}}>Formação</li>
      <li id='/projects'  onClick={(e)=>{props.changePage('/projects')}}>Projetos</li>
      <li id='/know-how'  onClick={(e)=>{props.changePage('/know-how')}}>Tecnologias</li>
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
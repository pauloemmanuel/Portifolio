import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';
import './App.css';
import Navegacao from './components/AreaNavegacao';
import Exbicao from './components/AreaExibicao';
import { HomeArea } from './pages/Home/styled';
import {Template} from './components/MainComponents';




const Page = (props) => {
  return(
    <BrowserRouter>
    <Template>
    <HomeArea>
    <Navegacao></Navegacao>
    <Exbicao>
 <Routes/>
    </Exbicao>
    </HomeArea>
     
    </Template>
   
    </BrowserRouter>
   
  );
}

const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}
const mapDispatchToProps = (dispatch)=>{
  return{};
}

export default connect (mapStateToProps,mapDispatchToProps)(Page);
import React from 'react';
import {AreaExibicao} from './styled';
import { PageTitle } from '../MainComponents';
import { connect } from 'react-redux';
import Page from '../../pages/Page404';

const Exbicao = (props)=> {
  
  return(
<AreaExibicao className='AreaExibicao'>

{props.page === '/sobre' && 
<div className='container'>
<PageTitle>Sobre mim</PageTitle>
<div className='conteudo'>
Olá!<br/> Meu nome é Paulo e eu adoro de codar enquanto escuto uma boa música!<br/>
Sou um desenvolvedor Web localizado no Brasil em uma pequena cidade do interior de São Paulo.<br/>
Meu interesse em desenvolvimento começou em 2018, quando tive a idéia 
de criar um Blog de Musica - E aprendi que não era tão fácil quanto eu pensava.<br/>
Em minhas experiências técnicas já convivi com uma ampla variedade de tecnologias
como:<br/> Azure, desenvolvimento Web utilizando Java e Php, React, sites single-page, sites com carrinho e sistema de login, criação e implementação de interfaces.  <br/>
Meus Hobbies são Jogos, Literatura de Romance, Seriados de Ficção Científica.<br/>

<div className='list'>
<PageTitle>Minhas Obras Favoritas</PageTitle>
 <ul>
   <li>(Livros) Série de Livros Divergente</li>
   <li>(Livros) Série de Livros Percy Jackson </li>
   <li>(Livros) Os Heroi do Olimpo</li>
   <li>(Livros) Série Warrior Cats</li>
   <li>(Série) Stranger Things </li>
   <li>(Série) World Trigger </li>
   <li>(Série) Fairy Tail </li>
   <li>(Série) <span style={{color:'pink'}}>Darling in The FranxX</span> </li>
   <li>(Série) Sword Art Online </li>
   <li>(Game) Hot Wheels: Unleashed</li>
   <li>(Game) Mad Max: Estrada da Fúria</li>
   <li>(Game) Dying Light</li>
 </ul>
 </div>
 </div>

</div>
}
{props.page === '/education' && 
<div className='container'>
<PageTitle>Formacao</PageTitle>
<div className='conteudo'>
Formacao
 </div>
</div>
}
{props.page === '/projects' && 
<div>
<PageTitle>Sobre mim</PageTitle>
  projects
</div>
}
{props.page === '/know-how' && 
<div>
<PageTitle>Sobre mim</PageTitle>
  Tecnologias
</div>
}


</AreaExibicao>
  );
}
const mapStateToProps =(state)=>( {
  page:state.page.pagina_exibida
 });
export default connect(mapStateToProps)(Exbicao);
import React from 'react';
import {AreaExibicao} from './styled';
import { PageTitle } from '../MainComponents';
import { connect } from 'react-redux';
import Page from '../../pages/Page404';

const Exbicao = (props)=> {
  
  return(
<AreaExibicao className='AreaExibicao'>

{props.page === '/sobre' && 
<div>
<PageTitle>Sobre mim</PageTitle>
</div>
}
{props.page === '/education' && 
<div>
<PageTitle>Sobre mim</PageTitle>
  education
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
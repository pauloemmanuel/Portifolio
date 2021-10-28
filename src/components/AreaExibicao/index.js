import React from 'react';
import {AreaExibicao} from './styled';
import { connect } from 'react-redux';

const Exbicao = (props)=> {
  
  return(
<AreaExibicao className='AreaExibicao'>

{props.page === '/sobre' && 
<div>
  sobre
</div>
}
{props.page === '/education' && 
<div>
  education
</div>
}
{props.page === '/projects' && 
<div>
  projects
</div>
}
{props.page === '/know-how' && 
<div>
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
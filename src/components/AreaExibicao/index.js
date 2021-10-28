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
<PageTitle>Formação</PageTitle>
<div className='conteudo'>
<div className='item-formacao'>
<strong>Ensino Superior </strong> - Análise e Desenvolvimento de Sistemas - <strong>Fatec Jales</strong> - Fev/2021-Dez/2023.<br/>
<span className='span'>Forma profissionais que analisam, projetam, implementam e coordenam infraestruturas de Tecnologia da Informação e Comunicação- TIC, atendendo a necessidade de mudanças provocadas pelas inovações tecnológicas nas empresas. O curso possui ênfase em engenharia de software, atuando em metodologias de construção de projetos, qualidade de software, integridade e segurança da informação, inteligência artificial, administração de banco de dados, hardware, rede de computadores, gestão de projetos de TI, consultoria tecnológica, desenvolvimento de sistemas, entre outros.</span>
</div>

<div className='item-formacao'>
<strong>Ensino Técnico </strong> - Informática para Internet - <strong>Etec Armando José Farinazzo</strong> - Fev/2019-Jul/2020.<br/>
<span className='span'> O Curso de Técnico em Informática para Internet tem como objetivo atender a crescente demanda por profissionais qualificados para o desenvolvimento de sistemas para Internet, habilitando o profissional a projetar desde a interface até a configuração do ambiente para disponibilização dos sistemas. Contempla desde os conceitos fundamentais até o estudo aprofundado das diferentes tecnologias de desenvolvimento de softwares, sistemas operacionais, redes de computadores, banco de dados, interfaces gráficas, web design, além de outras tecnologias.</span>
</div>

<div className='item-formacao'>
<strong>BootCamp </strong> - FullStack Devlopment  QA -  <strong>{'{ Parças }'} Devlopment School </strong> - Mar/2021-Out/2021.<br/>
<span className='span'> Formamos desenvolvedores com diferentes níveis de senioridade e fazemos a avaliação de performance do profissional contratado, acompanhando o processo de adaptação com as equipes das empresas.</span>
</div>
<PageTitle>Outras Experiências Relevantes</PageTitle>
<div className='item-formacao'>
<strong>Microsoft</strong> - Computação em nuvem e Inteligência Artificial / Jul/2021 - 40 horas<br/>
</div>
<div className='item-formacao'>
<strong>Etec Armando José Farinazzo</strong> - Lixo Eletrônico / Fev/2029-Jul/2020 - 60 horas<br/>

</div>
<div className='item-formacao'>
<strong>WorkOver</strong> - Metodologia Scrum - Jan/2020 - 3 horas<br/>

</div>
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
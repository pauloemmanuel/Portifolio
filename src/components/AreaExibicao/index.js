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
<div className='img-perfil'></div>
Olá!<br/> Meu nome é Paulo e eu adoro codar enquanto escuto uma boa música!<br/>
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

  <div className='container'>
  <PageTitle>Meus Projetos</PageTitle>

    <div className='img-holder'>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903377693108736050/unknown.png?width=1193&height=676'></img></div>
        <div className='title'>Projeto Home Pizzaria</div>
        <div className='description'> Projeto que simula o carrinho de compras de uma pizzaria</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/Projeto-Venda-De-Pizza/'>Link Para o Projeto</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903383440542556170/unknown.png?width=1284&height=675'></img></div>
        <div className='title'>Cópia do Google</div>
        <div className='description'> Foi feito um projeto para se parecer o mais próximo possível  Google</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/Clone-do-Google/'>Link Para o Projeto</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src=' https://media.discordapp.net/attachments/584617788329689099/903391836591247390/unknown.png?width=1377&height=676'></img></div>
        <div className='title'>Projeto Awax</div>
        <div className='description'> Foi feito um layout baseado em um site da internet</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/Projeto-Awax/'>Link Para o Projeto</a></div>
      </div>

     
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903390209297768458/unknown.png?width=1369&height=676'></img></div>
        <div className='title'>Projeto StarBucks</div>
        <div className='description'> Foi criado uma single-page inspirado na empresa Star Bucks</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/Projeto-Star-Bucks/#'>Link Do Projeto</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903391078747603034/unknown.png?width=1383&height=676'></img></div>
        <div className='title'>Projeto MediCenter</div>
        <div className='description'> Foi criado uma single-page inspirado em uma empresa de Medicina</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/MediCenter/'>Link Do Projeto</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903391359048749056/unknown.png?width=1385&height=676'></img></div>
        <div className='title'>Tributo Yoda</div>
        <div className='description'> Foi criado um tributo para meu personagem favorito de Star Wars</div>
        <div className='description'> <a target='_blank' href='https://pefokun.github.io/Tributo-Yoda/'>Link Do Projeto</a></div>
      </div>

 
 
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903385763390062612/unknown.png?width=1440&height=636'></img></div>
        <div className='title'>Cadastro de Funcionario</div>
        <div className='description'> Projeto que cadastra, cria e exclui usuarios</div>
        <div className='description'> <a target='_blank' href='https://github.com/PefoKun/Cadastro_De_Usuario'>Link Do Git</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903387715494617148/unknown.png?width=1440&height=555'></img></div>
        <div className='title'>Template para BS4</div>
        <div className='description'> Template para ser utilizado em páginas web</div>
        <div className='description'> <a target='_blank' href='https://github.com/PefoKun/Formulario-em-Bs4'>Link Do Git</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img src='https://media.discordapp.net/attachments/584617788329689099/903388580720836628/unknown.png?width=908&height=676'></img></div>
        <div className='title'>Jokenpo!</div>
        <div className='description'> Jogue Pedra,Papel ou Tesoura contra um site em Js.</div>
        <div className='description'> <a target='_blank' href='https://github.com/PefoKun/Pedra-Papel-Tesoura'>Link Do Git</a></div>
      </div>
   
    

      
    
    </div>

  </div>
</div>
}
{props.page === '/know-how' && 
<div>
<div className='container'>
<PageTitle>Tecnologias</PageTitle>
<div className='img-holder'>
<div className='img-item'>
        <div className='img'><img  style={{width:300,height:200}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'></img></div>
        <div className='title'>React</div>
        <div className='description'> React é uma biblioteca JavaScript front-end gratuita</div>
        <div className='description'> <a target='_blank' href='https://reactjs.org/'>Pagina Oficial</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src=' https://peritoemphp.com/wp-content/uploads/2019/02/letter_c_PNG22.png'></img></div>
        <div className='title'>C</div>
        <div className='description'> C é uma linguagem de programação de computador procedural </div>
        <div className='description'> <a target='_blank' href='https://docs.microsoft.com/pt-br/cpp/c-language/?view=msvc-160'>Pagina Oficial</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src=' https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png'></img></div>
        <div className='title'>HTML</div>
        <div className='description'> É a linguagem de marcação padrão para documentos a serem exibidos em um navegador da web </div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:150,height:180}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'></img></div>
        <div className='title'>CSS</div>
        <div className='description'> É uma linguagem de folha de estilo usada para estilizar em um navegador da web </div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src=' https://digitalents.com.br/wp-content/uploads/2016/03/js-logo.png'></img></div>
        <div className='title'>Java Script</div>
        <div className='description'> É uma linguagem de programação que está em conformidade com a especificação ECMAScript.</div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src='https://www.jamesstone.com/wp-content/uploads/2017/11/Boostrap_logo.svg'></img></div>
        <div className='title'>BootStrap</div>
        <div className='description'> Bootstrap é um framework CSS para ser utilizado no front-end de aplicações web.</div>
     
      </div>
      

     

     
</div>
</div>
</div>
}


</AreaExibicao>
  );
}
const mapStateToProps =(state)=>( {
  page:state.page.pagina_exibida
 });
export default connect(mapStateToProps)(Exbicao);
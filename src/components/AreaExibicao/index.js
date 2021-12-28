import React from 'react';
import {AreaExibicao} from './styled';
import { PageTitle } from '../MainComponents';
import { connect } from 'react-redux';
import Page from '../../pages/Page404';

const Exbicao = (props)=> {
  
  const tecnologias = [
  {id:1,titulo:'Projeto Home Pizzaria',imagem:'https://media.discordapp.net/attachments/584617788329689099/903377693108736050/unknown.png?width=1193&height=676',descricao:'Projeto que simula o carrinho de compras de uma pizzaria.',link:'https://pefokun.github.io/Projeto-Venda-De-Pizza/',linkplaceholder:'Link Para o Projeto'},
  {id:2,titulo:'Projeto Awax',imagem:'https://media.discordapp.net/attachments/584617788329689099/903391836591247390/unknown.png?width=1377&height=676',descricao:'Foi feito um layout baseado em um site da internet.',link:'https://pefokun.github.io/Projeto-Awax/',linkplaceholder:'Link Para o Projeto'},
  {id:3,titulo:'Projeto StarBucks',imagem:'https://media.discordapp.net/attachments/584617788329689099/903390209297768458/unknown.png?width=1369&height=676',descricao:'Foi criado uma single-page inspirado na empresa Star Bucks.',link:'https://pefokun.github.io/Projeto-Star-Bucks/#',linkplaceholder:'Link Para o Projeto'},
  {id:4,titulo:'Cópia do Google',imagem:'https://media.discordapp.net/attachments/584617788329689099/903383440542556170/unknown.png?width=1284&height=675',descricao:'Foi feito um projeto para se parecer o mais próximo possível Google.',link:'https://pefokun.github.io/Clone-do-Google/',linkplaceholder:'Link Para o Projeto'},
  {id:5,titulo:'Projeto MediCenter',imagem:'https://media.discordapp.net/attachments/584617788329689099/903391078747603034/unknown.png?width=1383&height=676',descricao:'Foi criado uma single-page inspirado em uma empresa de Medicina.',link:'https://pefokun.github.io/MediCenter/',linkplaceholder:'Link Para o Projeto'},
  {id:6,titulo:'Tributo Yoda',imagem:'https://media.discordapp.net/attachments/584617788329689099/903391359048749056/unknown.png?width=1385&height=676',descricao:'Foi criado um tributo para meu personagem favorito de Star Wars.',link:'https://pefokun.github.io/Tributo-Yoda/',linkplaceholder:'Link Para o Projeto'},
  {id:7,titulo:'Cadastro de Funcionários',imagem:'https://media.discordapp.net/attachments/584617788329689099/903385763390062612/unknown.png?width=1440&height=636',descricao:'Projeto que cadastra, cria e exclui usuários.',link:'https://github.com/PefoKun/Cadastro_De_Usuario',linkplaceholder:'Link Do GitHub'},
  {id:8,titulo:'Jokenpo!',imagem:'https://media.discordapp.net/attachments/584617788329689099/903388580720836628/unknown.png?width=908&height=676',descricao:'Jogue Pedra,Papel ou Tesoura contra um site em Js.',link:'https://github.com/PefoKun/Pedra-Papel-Tesoura',linkplaceholder:'Link Do GitHub'},
  {id:9,titulo:'Abc Online!',imagem:'https://media.discordapp.net/attachments/584617788329689099/910327781223698452/unknown.png?width=912&height=473',descricao:'Projeto feito para auxiliar crianças a aprender o alfabeto',link:'https://github.com/PefoKun/ABC-ONLINE',linkplaceholder:'Link Do GitHub'},
  {id:10,titulo:'Template para BS4',imagem:'https://media.discordapp.net/attachments/584617788329689099/903387715494617148/unknown.png?width=1440&height=555',descricao:'Template para ser utilizado em páginas web',link:'https://github.com/PefoKun/Formulario-em-Bs4',linkplaceholder:'Link Do GitHub'},
  {id:10,titulo:'Site Newsletter',imagem:'https://media.discordapp.net/attachments/584617788329689099/925419034575519794/unknown.png?width=1373&height=676',descricao:'Desafio da RocketSeat usando CSS e HTML5',link:'https://github.com/PefoKun/Desafio-CSS-RocketSeat',linkplaceholder:'Link Do GitHub'},

];

function mostrarTecnologias(){
 
    const tecnologiasJuntas =  tecnologias.map((item)=>{
     return( 
     <div className='img-item' id={item.id}>
      <div className='img'><img src={item.imagem}></img></div>
      <div className='title'>{item.titulo}</div>
      <div className='description'>{item.descricao}</div>
      <div className='description'> <a target='_blank' href={item.link}>{item.linkplaceholder}</a></div>
      </div>
     );
    })
    return tecnologiasJuntas;
  
}

  return(
<AreaExibicao className='AreaExibicao'>

{props.page === '/sobre' && 
<div className='container'>

<PageTitle>Sobre mim</PageTitle>
<div className='conteudo'>
<div className='img-perfil'></div>
Olá!<br/> Meu nome é Paulo e eu adoro codar enquanto escuto uma boa música!<br/>
Sou brasileiro, resido em uma pequena cidade do estado de São Paulo e sou Desenvolvedor Web.<br/>
Meu interesse em desenvolvimento começou em 2018, quando tive a ideia 
de criar um Blog de Música - E aprendi que não era tão fácil quanto eu pensava.<br/>
Em minhas experiências técnicas já convivi com uma ampla variedade de tecnologias
como: Azure, desenvolvimento Web utilizando Java e Php, React, sites single-page, sites com carrinho e sistema de login, criação e implementação de interfaces.<br/>
Meus Hobbies são Jogos, Literatura de Romance, Seriados de Ficção Científica.<br/>

<div className='list'>
<PageTitle>Minhas Obras Favoritas</PageTitle>
 <ul>
   <li>(Livros) Série de Livros Divergente</li>
   <li>(Livros) Série de Livros Percy Jackson </li>
   <li>(Livros) Os Heróis do Olimpo</li>
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
    {mostrarTecnologias()}
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
        <div className='description'> React é uma biblioteca JavaScript front-end gratuita.</div>
        <div className='description'> <a target='_blank' href='https://reactjs.org/'>Pagina Oficial</a></div>
</div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src=' https://peritoemphp.com/wp-content/uploads/2019/02/letter_c_PNG22.png'></img></div>
        <div className='title'>C</div>
        <div className='description'> C é uma linguagem de programação de computador procedural </div>
        <div className='description'> <a target='_blank' href='https://docs.microsoft.com/pt-br/cpp/c-language/?view=msvc-160'>Pagina Oficial</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src='https://pics.computerbase.de/1/6/3/2/6/logo-256.png'></img></div>
        <div className='title'>PHP</div>
        <div className='description'> PHP é uma linguagem de script voltada para o desenvolvimento web.</div>
        <div className='description'> <a target='_blank' href='https://www.php.net/'>Pagina Oficial</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src='https://digitalents.com.br/wp-content/uploads/2016/03/js-logo.png'></img></div>
        <div className='title'>Java Script</div>
        <div className='description'> É uma linguagem de programação em conformidade com o ECMAScript.</div>
        <div className='description'> <a target='_blank' href='https://js.org/'>Pagina Oficial</a></div>
      </div>
      <div className='img-item'>
        <div className='img'><img style={{width:180,height:180}} src='https://www.jamesstone.com/wp-content/uploads/2017/11/Boostrap_logo.svg'></img></div>
        <div className='title'>BootStrap</div>
        <div className='description'> Bootstrap é um framework CSS utilizado no front-end.</div>
        <div className='description'> <a target='_blank' href='https://getbootstrap.com/'>Pagina Oficial</a></div>
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
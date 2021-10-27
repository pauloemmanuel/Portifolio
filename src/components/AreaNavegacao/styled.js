import styled from 'styled-components';

export const AreaNavegacao = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Ubuntu:wght@400;700&display=swap');
flex:1;
margin:auto;
margin-left:200px;
width:300px;
height:80vh;
margin-right:120px;
background-color:#FFccff;
border-radius:10px 10px;
display:flex;
flex-direction:column;
border:2px solid RGBA(255,200,200);

.img{
  width:200px;
  height:200px;
  border-radius:50%;
  margin:auto;
  margin-top:40px;
  
  background-image:url('./img/foto.png');
  background-position:top;
  background-size: cover;

}

.nav-bar{
  display:flex;

  ul,li{
   
    list-style:none;
  }
  ul{
    padding-top:30px;
    padding-left:0px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  li{
    width:100%;
    border-radius:50px 5px 50px;
    text-align:center;
    line-height:40px;
    border-bottom:2px solid grey;
   
    
    font-family: 'Open Sans', sans-serif;
font-family: 'Ubuntu', sans-serif;
font-weight:bold;


&:first-child{
  border-top:2px solid grey;
}
&:hover{
  background-color:rgba(170,255,5,0.4);
  color:white;
  cursor: pointer;
}

&.selected{
  background-color:rgba(200,255,0);
  color:black;
  border:2px solid black;
}
  }
}
`;
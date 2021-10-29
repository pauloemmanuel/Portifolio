import styled from 'styled-components';

export const AreaNavegacao = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Ubuntu:wght@400;700&display=swap');
flex:1;
margin:auto;
margin-left:100px;
width:300px;
height:80vh;
margin-right:70px;
background-color:#191b1f;
border-radius:10px 10px;
display:flex;
color:#ddd;

flex-direction:column;
box-shadow:    0px 0px 10px -1px  rgba(250,245,130);
border:1px solid rgba(255,255,0,0.1);


.imgMenu{
  width: 50px;
  display:none;
}

.navegacao{
  display:flex;
align-items:center;
flex-direction:column;

.email{
  margin:20px;
}
}
.img{
  width:150px;
  height:150px;
  border-radius:50%;
  margin:auto;
  margin-right:30px;
  margin-left:30px;
  margin-top:40px;
  border:2px solid black;
  
  box-shadow:    0px 0px 10px 0px  rgba(250,245,130);
  
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
    line-height:35px;
    padding:5px;
    border-bottom:1px solid rgba(230,230,230);
    font-size:1rem;
   
    
    font-family: 'Open Sans', sans-serif;
font-family: 'Ubuntu', sans-serif;
font-weight:bold;


&:first-child{
  border-top:1px solid rgba(230,230,230);
}
&:hover{
  background-color:rgba(250,240,160);
  color:#aaa;
  cursor: pointer;
}

&.selected{
  background-color:rgba(250,220,120);
  color:black;
  border:2px solid black;
  box-shadow:    0px 0px 10px -1px  rgba(250,245,160);
}
  }
}


@media(max-width:768px){
  display:flex;
  flex-wrap:wrap;
 width:100%;
 height:30vh;
 padding-left:0px;
 margin-left:0px;
 margin-right:0px;
 box-shadow:  none;
 margin-bottom:40px;
 border-radius:0px;;
 margin-bottom:1px;
 border:none;


 .imgMenu{
  width: 50px;
  display:block;
  position:absolute;
  top:20px;
  left:20px;
}
.navegacao{
  width:100vw;
  .img{
    display:none;
  }
}

.nav-bar{
  ul{
    padding-left:0px;
    width:100%;
    display:flex;
    flex-direction:row-reverse;
  
    justify-content:center;
    align-items:center;
  }
  li{
    width:100%;               
    border-radius:50px 5px 50px;
    text-align:center;
    line-height:10px;
    padding:20px;
   display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid rgba(230,230,230);
    font-size:1rem;
  
    font-family: 'Open Sans', sans-serif;
font-family: 'Ubuntu', sans-serif;
font-weight:bold;

  }
}
}
@media(max-width:425px){

  .nav-bar{
  ul{
    padding-left:0px;
    width:100%;
    display:flex;
    flex-direction:row;
  
    justify-content:center;
    align-items:center;
  }
  li{
    width:100%;               
    border-radius:50px 5px 50px;
    text-align:center;
    line-height:10px;
    padding:10px;
   display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid rgba(230,230,230);
    font-size:0.8rem;
  
    font-family: 'Open Sans', sans-serif;
font-family: 'Ubuntu', sans-serif;
font-weight:bold;

  }
}



`;
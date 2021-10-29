import styled from 'styled-components';

export const AreaExibicao = styled.div`
flex:4;
margin:auto;
margin-right:100px;
background-color:#191b1f;
height:80vh;
box-shadow:    0px 0px 10px -1px  rgba(250,245,130);
border-radius:10px 10px;

.container{
  padding-right:60px;
  padding-left:60px;
  padding-top:30px;
overflow:auto;
  margin:0;
  line-height:32px;
  overflow:auto;
  text-align:justify;
  display:flex;
  width:100%;
  flex-direction:column;
  height:80vh;
  
  
  &::-webkit-scrollbar {
  width:9px; 
  height:20px;   

        /* width of the entire scrollbar */
}

&::-webkit-scrollbar-track {
  background: none;        /* color of the tracking area */
}

&::-webkit-scrollbar-thumb {
  
  background-color: rgba(250,245,130);    /* color of the scroll thumb */
  border-radius: 10px;       /* roundness of the scroll thumb */
  border:3px solid black ; /* creates padding around scroll thumb */
}

.img-holder{
  
   width:100%;
  
  
   display:flex;
   justify-content: space-between;
   flex-wrap: wrap;

.img-item{

  width:300px;
  padding:10px;
  margin-top:10px;
  margin-bottom:10px;
border-radius:20px;
box-shadow:0px 0px 10px 2px;
align-items:center;
  margin-right:10px;
  height:320px;
  display:flex;
  flex-direction:column;
  background-color:black;
.img{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:170px;
  & img{
    border-radius:10px 10px 0px 0px;
  width:100%;
  height:100%;
  
  background-position: center;
 
  }
}
.title{
  color:white;
  font-weight:bold;
  margin-top:10px;
  font-size:1.2rem;
  
}
.description{
  color:rgba(255,255,255,.75);
  text-align:center;

  a{
    text-decoration:none;
    color:rgba(250,245,80);
  }
}

}

}

}

.conteudo{
    height:100%;
    color:rgba(255,255,255,.75);
    font-weight:regular;
    font-size:20px;
    padding-bottom:10px;
    strong{
      color:rgba(255,255,255,.85);
    }
    .item-formacao{
      padding-bottom:15px;
    }
    .span{
      font-size:15px;
      line-height:4px;
  
      color:rgba(255,255,255,.5);
 
      
    }
  }

.list {

  .listTitle{
    color: rgba(250,245,130);
    font-weight:bold;
    padding-bottom:20px;
    font-size:25px;
  }
  ul{
    border:0;
    list-style:none;
    padding:5px;}
}

@media(max-width:770px){
  
  box-shadow:  inset 0px 0px 10px -1px  rgba(250,245,130);
  display:flex;
 width:100%;
 margin:20px;
 margin-right:-60px;
flex:4;
margin:auto;
background-color:#191b1f;
box-shadow:   inset 0px 0px 10px 0px  rgba(250,245,130);
border-radius:10px 10px;

 .container{
  padding-right:30px;
  padding-left:30px;
  padding-top:30px;
overflow:auto;
  margin:0;
  line-height:35px;
  overflow:auto;
  text-align:justify;
  display:flex;
  width:100%;
  flex-direction:column;
  height:80vh;

  .img-holder{
    
    justify-content:center;
    align-items:center;
    .img-item{
        
       height:360px;
       margin-right:20px;
       margin-bottom:30px;
      }
    }
    .img-perfil{
   
      margin:auto;
  width:180px;
  height:180px;
  border-radius:50%;
  border:2px solid black;
  
  box-shadow:    0px 0px 10px 0px  rgba(250,245,130);
  
  background-image:url('./img/foto.png');
  background-position:top;
  background-size: cover;

}

}
@media(max-width:320px){
  .container{
    .img-holder{
      .img-item{
        
        width:270px
      }
   
    }
  }
}
  @media(max-width:425px){
  .container{
    height:83vh;
    .img-holder{
      width:100%;
      .img-item{
        
       margin-right:0px;
       margin-bottom:20px;
      }
   
    }
  }
}
`;
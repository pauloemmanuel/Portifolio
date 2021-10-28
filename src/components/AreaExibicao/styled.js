import styled from 'styled-components';

export const AreaExibicao = styled.div`
flex:4;
margin:auto;
margin-right:100px;
background-color:#191b1f;
height:80vh;
box-shadow:  0px 0px 10px 2px  rgba(250,245,130);
border-radius:10px 10px;


.conteudo{
    height:100%;
    color:rgba(255,255,255,.75);
    font-weight:regular;
    font-size:20px;
    padding-bottom:10px;
  }
.container{
  padding-right:60px;
  padding-left:60px;
  padding-top:30px;
  
  margin:0;

  
  line-height:32px;
  overflow:auto;
  text-align:justify;
  display:flex;
  width:100%;
  flex-direction:column;
  height:100%;
  
  
  &::-webkit-scrollbar {
  width:10px;               /* width of the entire scrollbar */
}

&::-webkit-scrollbar-track {
  background: none;        /* color of the tracking area */
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(250,245,80);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border:2px solid black; /* creates padding around scroll thumb */
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
`;
import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#FFF;
height:60px;
border-bottom:1px solid #ccc;
.container {
max-width:1000px;
margin:auto;
display:flex;
}

a{
  text-decoration:none;
  font-weight:bold;
}

.logo{
  flex:1;
display:flex;
align-items:center;
height:60PX;
.logo-1,.logo-2,.logo-3{
  font-size:27px;
  font-weight:bold;
}
.logo-1{ color:#F00}
.logo-2{ color:#0F0}
.logo-3{ color:#00F}
}

nav{
  padding-top:10px;
  padding-bottom:10px;

  ul,li{ padding:0; margin:0; list-style:none}

  ul{display:flex;
  align-items:center;
  height:40px;
  }
  li{
    margin-left:20px;
    margin-right:20px;
  
  a{
    color:black;
    font-size:14px;
    text-decoration:none;

    &:hover{
      color:#999
    }
    &.button{
      background-color:#FF8100;
      border-radius:4px;
      color:#FFF;
      padding:5px 10px;
    }
    &.button:hover{
    
      background-color:#E57706
    }
  }
  }
}
`;
import styled from 'styled-components';

export const HomeArea = styled.div`
width:100vw;
height:100vh;
background-color:black;
display:flex;

@media(max-width:770px){
  display:flex;
  flex-direction:column;


width:100%;
overflow:hidden;
height:100%;
}
`;
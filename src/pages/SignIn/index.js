import React,{useState} from 'react';
import {PageArea} from './styled';
import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer,PageTitle,ErrorMessage} from '../../components/MainComponents';
const Page = () =>{

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [rememberPassword,setRememberPassword] = useState('');
  const [disabled,setDisabled] = useState(false);
  const [error,setError] = useState('');


const api = useApi();

const handleSubmit=async (e)=>{
  e.preventDefault();
  setDisabled(true);

  const json = await api.login(email,senha);
  if(json.error){
    setError(json.error);
  }else{
    doLogin(json.token, rememberPassword)
    window.location.href = '/'
  }

};



  return(
  <PageContainer>
    <PageTitle>Login</PageTitle>
    <PageArea>
    {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <label className='area'>
          <div className='area--title'>Email</div>
          <div className='area--input'>  <input type='email'  required disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)}/></div>
        </label>
        <label className='area'>
          <div className='area--title'>Senha</div>
          <div className='area--input'>  <input type='password' required disabled={disabled} value={senha} onChange={e=>setSenha(e.target.value)}/></div>
        </label>
        <label className='area'>
          <div className='area--title'>Lembrar Senha</div>
          <div className='area--input'><input type='checkbox' disabled={disabled} checked={rememberPassword} onChange={e=>setRememberPassword(!rememberPassword)}/>               </div>
        </label>
        <label className='area'>
          <div className='area--title'></div>
          <div className='area--input'><button disabled={disabled}>Fazer Login</button></div>
        </label>

      </form>
    </PageArea>
  </PageContainer>
  );
}


export default Page;
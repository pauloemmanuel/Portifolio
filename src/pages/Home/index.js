import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
  return(
    <div>
      Página Inicial<br/>
      <Link to='/about'>Sobre</Link>
    </div>
  );

}

export default Page;
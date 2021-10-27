import React from 'react';
import {Link, Redirect} from 'react-router-dom';



const Page = () => {


  return(
     <Redirect to={{pathname: '/404'}} />
  );

}

export default Page;
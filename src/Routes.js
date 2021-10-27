import React from 'react';
import { Switch,Route } from 'react-router-dom';


import Home from './pages/Home';

import NotFound from './pages/NotFound';
import Page404 from './pages/Page404';


export default () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/404">
      <Page404/>
      </Route>
       <Route>
         <NotFound/>
       </Route>
       
    </Switch>
  );
}
import React from "react";


import { BrowserRouter, Switch, Route } from "react-router-dom"

import  Home   from  './components/Pages/Home';
import View from './components/Student/View';
import Edit from './components/Student/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/view/1"  component={View} />
          <Route path="/edit/1"  component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

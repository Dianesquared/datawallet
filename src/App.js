import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Bank from './component/Banks/bank';
import AddBank from './component/Banks/add';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bank" exact component={Bank} />
      <Route path="/bank/add" exact component={AddBank} />
    </Switch>
  );
}

export default App;

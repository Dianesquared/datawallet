import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Bank from './component/Banks/bank';
import AddBank from './component/Banks/add';
import EditBank from './component/Banks/edit';
import ViewPersonal from './component/Personal/view';
import ViewGovernment from './component/Government/view';

function App() {
  return (
    <Switch>
    <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/bank" exact component={Bank} />
      <Route path="/addbank" exact component={AddBank} />
      <Route path="/editbank/:id" exact component={EditBank} />
      <Route path="/personal" exact component={ViewPersonal} />
      <Route path="/government" exact component={ViewGovernment} />
      <Route path="*" component={Home}/>
    </Switch>
  );
}

export default App;

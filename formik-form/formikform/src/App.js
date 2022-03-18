import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Regisiterpage from './Components/regisiter/registerpage';
import Loginpage from './Components/regisiter/loginpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/register" exact component={Regisiterpage} />
          <Route path="/login" exact component={Loginpage} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;

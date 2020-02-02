import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import {HomePage} from './Components/HomePage'
import { LoginPageH } from "./Components/PagesHook/H_LoginPage";
import Dashboard from "./Components/Dashboard";

const userLogged = null;

function App() {
  return (
    <div>
    <Route path='/login' exact component={LoginPageH} />
    <Route path='/' exact component={HomePage} />
    <Route path='/dashboard' exact component={Dashboard} />
    </div>
  );
}

export default App;

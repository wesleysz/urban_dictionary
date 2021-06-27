import './App.css';
import {useState} from 'react';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Add from "./Components/Add";
import User from "./Containers/User";
import Home from "./Containers/Home";
import Search from "./Containers/Search";
import Author from "./Containers/Author";


function App() {
  const [searchWord,setSearchWord]=useState("")
  const [searchAuthor, setSearchAuthor]=useState("")

  return (
    <BrowserRouter>

      <Switch>
        
        <Route exact={true} path="/login" component={LogIn} />
        <Route exact={true} path="/add" component={Add} />
        <Route exact={true} path="/user" component={User} />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/search" component={Search} />
        <Route exact={true} path="/author" component={Author} />
        <Redirect exact={true} from="/home" to="/" />
      </Switch>
    </BrowserRouter>     
  );
}
export default App;

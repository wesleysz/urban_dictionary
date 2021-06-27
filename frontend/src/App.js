import './App.css';
import {useState} from 'react';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import {Typography} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input, Button } from 'antd';
// import Home from "./Containers/Home";
import LogIn from "./Components/LogIn";
import Add from "./Components/Add";
import User from "./Containers/User";
import Search from "./Containers/Search";
import Author from "./Containers/Author";
import GoogleBtn from "./Components/GoogleBtn";
import Card from "./Components/Card";
import icon from "./imgs/icon.png";

function App() {
  const [searchWord,setSearchWord]=useState("")
  const [searchAuthor, setSearchAuthor]=useState("")

  return (
    <BrowserRouter>
      <div className="root">
        <div className="header">
          <div className="row-title">
            <button className="homeBtn">
              <NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
            </button>
          </div>
          <div className="row-bar" >
            {/* <Space >  */}
              <Input.Search
                style={{ width: "100%"}} 
                placeholder="Type any word..."
                allowClear
                enterButton="Search"
                size="large"
                // onSearch={}
              />
              {/* <a className="circle-button"></a> */}
            {/* </Space> */}
          </div>
        </div>

        <div id="content">
          <Card wordId={1}/>
          <Card wordId={2}/>
        </div>

        <div className="footer" />

      </div>
    </BrowserRouter>        
    );
}
export default App;

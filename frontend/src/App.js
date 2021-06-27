import './App.css';
import {useState} from 'react';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
// import Home from "./Containers/Home";
import LogIn from "./Components/LogIn";
import Add from "./Components/Add";
import User from "./Containers/User";
import Search from "./Containers/Search";
import Author from "./Containers/Author";
import GoogleBtn from "./Components/GoogleBtn";
import icon from "./imgs/icon.png";

import {Typography} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input, Button } from 'antd';

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
            <Space size={50}> 
              <Input.Search
                style={{ width: "44rem" }} 
                placeholder="Type any word..."
                allowClear
                enterButton="Search"
                size="large"
                // onSearch={}
              />
              <a className="circle-button"></a>
            </Space>
          </div>
        </div>

        <div id="content">
          <div className="card">
            <div className="tags">#tag1 #tag2</div>
            <div className="vocab">
              <a className="word">Vocabulary</a>
            </div>
            <div className="meaning">explanation........</div>
            <div className="example">example..........</div>
            <div className="author"> by me. June 21, 2021</div>
            <div className="footer"> 
              <Button >
                <Space size={4}> 
                  <ThumbUp color="primary" />
                  <Typography variant="button" display="block" gutterBottom >12</Typography>
                </Space>
              </Button>
              <Button >
                <Space size={4}> 
                  <ThumbDown color="primary" />
                  <Typography variant="button" display="block" gutterBottom >2</Typography>
                </Space>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>        
    );
}
export default App;

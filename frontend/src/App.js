import './App.css';
import {Input} from "antd";
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
import GoogleBtn from "./Components/GoogleBtn"
import icon from "./icon.png"

function App() {
    const [searchWord,setSearchWord]=useState("")
    const [searchAuthor, setSearchAuthor]=useState("")
    return (
        <BrowserRouter>
            <div className="root">
                <div className="header">
                    <div className="row">

                        <button>
                            <NavLink width="30" height="30" to="/home"><img src={icon} width="30" height="30"/></NavLink>
                        </button>
                    </div>
                    <div className="row">
                        <a className="circle-button"></a>
                    </div>
                </div>
                {/* <div style={{padding_left: '20px'}}>
                    <h1>Responsive Header</h1>
                    <p>Resize the browser window to see the effect.</p>
                    <p>Some content..</p>
                </div> */}
                <div id="content">

                    <div className="card">
                        <div className="tags">#tag1 #tag2</div>
                        <div className="vocab">
                            <a className="word">Vocabulary</a>
                        </div>
                        <div className="meaning">explanation........</div>
                        <div className="example">example..........</div>
                        <div className="author"> by me. June 21, 2021</div>
                        <div className="footer"> 讚: 12  倒讚: 3 按鈕:https://material-ui.com/zh/components/button-group/</div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

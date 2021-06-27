import './App.css';
import React from "react";
import {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Add from "./Components/Add";
import NotLogin from "./Components/NotLogin";
import User from "./Containers/User";
import Home from "./Containers/Home";
import Search from "./Containers/Search";
import Author from "./Containers/Author";
import GoogleBtn from "./Components/GoogleBtn"
import icon from "./imgs/icon.png";
import {Typography, Button} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input } from 'antd';

function App() {
  const [userName, setuserName]=useState("");
  const [userEmail, setuserEmail]=useState("");
	const [isLogin, setisLogin]=useState(false);
	const login = (googleUser) =>{
		const profile = googleUser.getBasicProfile();
		setuserName(profile.getName());
		setuserEmail(profile.getEmail());
		setisLogin(true);
	}
	const logout =  () => {
		setuserName("");
    setuserEmail("");
		setisLogin(false);
    <Redirect exact={true} from="/user" to="/" />
	}
	return (
		<BrowserRouter>
      <div className="background">
        <div className="header">
          <div className="row-title">
            <button className="homeBtn">
              <NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
            </button>
            <div className="row-title-bottons" >
              <Space size={18}>
                {isLogin?<NavLink to={{pathname:"/add", state:{ email:userEmail}}}><Button className="botton" >我要定義詞語</Button></NavLink>:null} 
                {isLogin?<NavLink to={{pathname:"/user", state:{id:100, name:userName, email:userEmail,isLogined:isLogin}}}><Button className="botton">應該會變成使用者名稱</Button></NavLink> :null}
                <GoogleBtn className="botton" login={login} logout={logout} isLogined={isLogin}></GoogleBtn>
              </Space>
            </div>
          </div>
          <div className="row-bar" >
            {/* <Space >  */}
            <Input.Search
              style={{ width: "100%"}} 
              placeholder="敬愛的網友，想探聽點什麼？"
              allowClear
              enterButton="搜尋"
              size="large"
              // onSearch={}
            />
            {/* <a className="circle-button"></a> */}
            {/* </Space> */}
          </div>
        </div>
          <Switch>
            <Route exact={true} path="/login" component={LogIn} />
            <Route exact={true} path="/add" component={Add} />
            <Route exact={true} path="/add/notLogin" component={NotLogin}/>
            <Route exact={true} path="/user" component={User} />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/search" component={Search} />
            <Route exact={true} path="/author" component={Author} />
            <Redirect exact={true} from="/home" to="/" />
          </Switch>
        <div className="footer" />
      </div>
		</BrowserRouter>     
	);
}
export default App;

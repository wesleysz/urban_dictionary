import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect,  useLocation } from "react-router-dom";
import { Space, Input } from 'antd';
import GoogleBtn from "../Components/GoogleBtn"
import Card from "../Components/Card";
import icon from "../imgs/icon.png";
import { Button } from '@material-ui/core';

function User (){
	const check = useLocation();
	if(!check.state){
		return(
			<Redirect exact={true} from="/user" to="/" />
		)
	}
	const {isLogined, name, email} = check.state;
	
	return(
		<>
		{/* <div className="header">
			<div className="row-title">
				<button className="homeBtn">
					<NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
				</button>
				<div className="row-title-bottons" >
					<Space size={18}>
						<NavLink to="/add"><Button className="botton">新增單字</Button></NavLink> 
						<NavLink className="botton" to={{pathname:"/User", state:{id:100, name:userName, isLogined:isLogin}}}><Button className="botton">應該會變成使用者名稱</Button></NavLink> 
						<GoogleBtn className="botton" login={login} logout={logout} isLogined={isLogin}></GoogleBtn>
					</Space>
				</div>
			</div>
		</div> */}
		<div id="content">
		<div className="row-bar" >
			{name}，你目前的筆名為{email}。請輸入想更改為的筆名：
			<Input.Search
              style={{ width: "100%"}} 
              placeholder="敬愛的網友，如何稱呼？"
              allowClear
              enterButton="儲存"
              size="medium"
              // onSearch={}
            />
		</div>
		你目前定義過的單字：
		</div>
		</>
	);
}

export default  User
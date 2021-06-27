import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { NavLink, Switch, Route, Redirect,  useLocation } from "react-router-dom";
import { Space, Input } from 'antd';
import GoogleBtn from "../Components/GoogleBtn"
import Card from "../Components/Card";
import icon from "../imgs/icon.png";
import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { MUT_MODIFY_PEN_NAME, MUT_USER_LOGIN } from "../graphql"

function User ({afunction,hi}){
	const [startModPen] = useMutation(MUT_MODIFY_PEN_NAME);
	const check = useLocation();
	const [showMsg, setshowMsg]=useState(false);
	const [Msg, setMsg]=useState('');
	const [Pen, setPen]=useState('[你尚未設定筆名]');
	useEffect(()=>{if(check.state && check.state.pen)setPen(check.state.pen); return(()=>{console.log("unmountede",hi)})},[check])
	if(!check.state){
		return(
			<Redirect exact={true} from="/user" to="/" />
		)
	}
	const { name, email} = check.state;
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
			{name}，你目前的筆名為{Pen}。請輸入想更改為的筆名：
			<Input.Search
              style={{ width: "100%"}} 
              placeholder="敬愛的網友，如何稱呼？"
              allowClear
              enterButton="儲存"
              size="medium"
			 // onSearch={afunction}
              onSearch={async (penName)=>{
				const {data} = await startModPen({variables:{pen:penName, email:email}})
				setMsg(data.modifyPenName.message)//success
				setshowMsg(true)
				afunction();
				if(data.modifyPenName.success)
					setPen(penName);
				}
			  }
            />
		</div>
		{showMsg?<p>{Msg}</p>:null}
		你目前定義過的單字：
		</div>
		</>
	);
}

export default  User
import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { NavLink, Switch, Route, Redirect,  useLocation } from "react-router-dom";
import {Input} from 'antd';
import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { MUT_MODIFY_PEN_NAME, MUT_USER_LOGIN } from "../graphql"

function User ({afunction,hi}){
	const [startModPen] = useMutation(MUT_MODIFY_PEN_NAME);
	const check = useLocation();
	const [showMsg, setshowMsg]=useState(false);
	const [Msg, setMsg]=useState('');
	const [Pen, setPen]=useState('[你尚未設定筆名]');
	const [changePenName, setChanegPenName]=useState(false);

	useEffect(()=>{if(check.state && check.state.pen)setPen(check.state.pen); return(()=>{console.log("unmountede",hi)})},[check])
	if(!check.state){
		return(
			<Redirect exact={true} from="/user" to="/" />
		)
	}
	const { name, email} = check.state;
	return(
		<>
		<div className="add-close">
			<NavLink to="/home">
				<Button variant="contained" color="primary" className="botton" >回首頁</Button>
			</NavLink>
		</div>
		<div id="user">
			<div className="component" >
				<div className="title">
					{name}，你目前的筆名為{Pen}
				</div>
				{changePenName?
					<Input.Search
						color="aliceblue"
						style={{ width: "50%", color : "aliceblue"}} 
						placeholder="親愛的網友，如何稱呼？"
						allowClear
						enterButton="儲存"
						size="medium"
						onSearch={async (penName)=>{
							const {data} = await startModPen({variables:{pen:penName, email:email}})
							setMsg(data.modifyPenName.message)//success
							setshowMsg(true)
							afunction();
							if(data.modifyPenName.success)
								setPen(penName);
						}
					}
					/> :
					<Button variant="outlined" className="botton" onClick={()=>{setChanegPenName(true)}}>更改筆名</Button>
				}	
			</div>
			<div className="component" >
				<div className="title">
					{showMsg?<p>{Msg}</p>:null}
					你目前定義過的單字：
				</div>
			</div>
		</div>
		</>
	);
}

export default  User
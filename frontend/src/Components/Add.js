import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import {Cancel} from '@material-ui/icons';
import {IconButton, Button} from '@material-ui/core';
import {Input} from 'antd';
import {Message} from './Message';


export default class Add extends Component{
	render(){
		return(
			<div className="add">
				<div className="add-close">
					<IconButton aria-label="cancel" color="primary" className="botton-place">
						<NavLink to="/home"><Cancel className="botton"/></NavLink>
					</IconButton>
				</div>
				<div className="add-title">
					來定義你的詞語吧！ 
				</div>
				<div className="add-form">
					<div className="title">想定義什麼詞呢? (必填)</div>
					<Input placeholder="想定義什麼詞呢?" className="input"></Input>
					<div className="title">它代表什麼意思? (必填)</div>
					<Input.TextArea placeholder="它代表什麼意思?" rows={4} className="input"></Input.TextArea>
					<div className="title">造一個句子吧！ (必填)</div>
					<Input.TextArea placeholder="造一個句子吧！" rows={2} className="input"></Input.TextArea>
					<div className="title">為它新增一些標籤吧~</div>
					<Input.TextArea placeholder="為它新增一些標籤吧！" rows={2} className="input"></Input.TextArea>
					<div className="footer">
						<Button variant="contained" color="primary" className="botton">我填完了！</Button>
					</div>
				</div>
				<div className="add-close"></div>
				
			</div>
		);
	}
}
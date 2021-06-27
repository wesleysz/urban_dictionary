import React, { Component } from "react";
import {useState} from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import GoogleBtn from "../Components/GoogleBtn"
import Card from "../Components/Card";
import icon from "../imgs/icon.png";
import {Typography, Button} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input } from 'antd';

const Home=()=>{
	const [searchWord,setSearchWord]=useState("")
	const [searchAuthor, setSearchAuthor]=useState("")
	return (
	<>
	<div className="header">
        <div className="row-title">
          <button className="homeBtn">
            <NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
          </button>
          <div className="row-title-bottons" >
            <Space size={14}>
              <Button className="botton"> Add new word </Button> 
              <Button className="botton"> <NavLink className="botton" to={{pathname:"/User", state:{id:100}}}> User info </NavLink> </Button> 
              <GoogleBtn className="botton"></GoogleBtn>
            </Space>
          </div>
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
	</>
	)
}

export default Home;
// export default class Home extends Component{
// 	render(){
// 		return (
// 			<div>
// 				<button>
// 					<NavLink to="/home">Home</NavLink>
// 				</button>
// 				// <button>
// 				// 	<NavLink to="/login">Log In</NavLink>
// 				// </button>
// 				<GoogleBtn/>
// 				<button>
// 					<NavLink to="/add">Add</NavLink>
// 				</button>
// 				<button>
// 					<NavLink to="/user">User</NavLink>
// 				</button>
// 				<input type="search"/>
// 				<button>
// 					<NavLink to="/search">Search</NavLink>
// 				</button>
// 				<input type="search"/>
// 				<button>
// 					<NavLink to="/author">Author</NavLink>
// 				</button>
// 				<hr />
// 				<Switch>
// 					<Route path="/login" component={LogIn} />
// 					<Route path="/add" component={Add} />
// 					<Route path="/user" component={User} />
// 					<Route path="/search" component={Search} />
// 					<Route path="/author" component={Author} />
// 					<Redirect from="/home" to="/" />
// 				</Switch>
// 			</div>
// 		);
// 	}
// }
{/* <button>
<NavLink to="/home">Home</NavLink>
</button>
// <button>
// 	<NavLink to="/login">Log In</NavLink>
// </button>
<GoogleBtn/>
<button>
<NavLink to="/add">Add</NavLink>
</button>
<button>
<NavLink to={{pathname:"/user", state: { fromDashboard: true }}} >User</NavLink>
</button>
<Input.Search
placeholder="Enter the author"
value={searchAuthor}
enterButton="Search"
onChange={(e)=>{setSearchAuthor(e.target.value)}}
></Input.Search>

<hr /> */}
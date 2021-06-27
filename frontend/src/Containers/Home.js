import React, { Component } from "react";
import {Input} from "antd";
import {useState} from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import LogIn from "../Components/LogIn";
import Add from "../Components/Add";
import User from "./User";
import Search from "./Search";
import Author from "./Author";
import GoogleBtn from "../Components/GoogleBtn"

const Home=()=>{
	const [searchWord,setSearchWord]=useState("")
	const [searchAuthor, setSearchAuthor]=useState("")
	return (
		<div>
			<button>
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
				<NavLink to="/user">User</NavLink>
			</button>
			<Input.Search
				placeholder="Enter the author"
				value={searchAuthor}
				enterButton="Search"
				onChange={(e)=>{setSearchAuthor(e.target.value)}}
			></Input.Search>
			
			<hr />
			<Switch>
				<Route path="/login" component={LogIn} />
				<Route path="/add" component={Add} />
				<Route path="/user" component={User} />
				<Route path="/search" component={Search} />
				<Route path="/author" component={Author} />
				<Redirect from="/home" to="/" />
			</Switch>
		</div>
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
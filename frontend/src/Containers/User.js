import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect,  useLocation } from "react-router-dom";


function User (){
	const {state:{id}} = useLocation();
	return(
		<div>
			I me my {id} mine
			<button>
				<NavLink to="/add">Add</NavLink>
			</button>
		</div>
	);
}

export default  User
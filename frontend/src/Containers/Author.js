import React, { useEffect, useState} from "react";
import {useQuery} from '@apollo/react-hooks'

import Cards from "../Containers/Cards";
import {QUE_QUERY_BY_USER} from "../graphql/index";

const Author=(props)=>{
	const [List, setList] = useState([]);
	console.log(props.match.params.term);
	const {loading,error,data}=useQuery(QUE_QUERY_BY_USER,{variables: {penName: props.match.params.penname},fetchPolicy: "cache-and-network"});
	useEffect(()=>{
		if(data) setList(data.queryByUser);
		return(()=>{
			console.log('home unmouted')
		})
	},[data]);
	//refetch();
	console.log("data",data);
	console.log("error",error);
	console.log("loading",loading);
	if(!data){
		return(
			<div id="content">
				<p className="loading">loading...</p>
			</div>
		)
	}
	return(
		<div id="content">
			<div className="footer" />
			<Cards data={data.queryByUser}/>
		</div>
	)
}

export default Author;
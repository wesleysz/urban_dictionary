import React, { useEffect, useState} from "react";
import Cards from "../Containers/Cards";
import {useQuery} from '@apollo/react-hooks'
import {QUE_QUERY_BY_USER } from "../graphql"

const UserCards=(pEnName)=>{
	const [List, setList] = useState([]);
	console.log("pEnName",pEnName.pEnName);
	const {loading,error,data}=useQuery(QUE_QUERY_BY_USER,{variables: {penName: pEnName.pEnName}, fetchPolicy: "cache-and-network"});
	useEffect(()=>{
		if(data) setList(data.queryByUser);
		return(()=>{
			console.log('home unmouted')
		})
	},[data]);
	console.log("data",data);
	console.log("error",error);
	console.log("loading",loading);
	if(!data){
		return(
			<div className="title">
				你目前定義過的單字：
				<p>loading...</p>
			</div>
		)
	}
	return(
		<div className="title">
			你目前定義過的單字：
			<Cards data={List}/>
		</div>
	)
}

export default UserCards;
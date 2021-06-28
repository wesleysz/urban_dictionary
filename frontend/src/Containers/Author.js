import React, { useEffect, useState, useContext } from "react";
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import Cards from "../Containers/Cards";
import { QUE_QUERY_BY_USER } from "../graphql";
import { UserInfo } from '../App';

const Author=()=>{
	const [List, setList] = useState([]);
	const { penname : penName }= useParams();

	// const check = useLocation();
	const userInfo = useContext(UserInfo);
	userInfo.setHideInput(false);

	const {loading,error,data}=useQuery(QUE_QUERY_BY_USER,{variables: {penName: penName},fetchPolicy: "cache-and-network"});

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
			<p id="general-title">載入中...</p>
			</div>
		)
	}
	return(
		<div id="content">
			{/* <div className="footer" /> */}
			<p id="general-title">{penName}的相關結果：</p>
			<Cards data={List} />
		</div>
	)
}

export default Author;
import React, { useEffect, useState} from "react";
import Cards from "../Containers/Cards";
import {useQuery} from '@apollo/react-hooks'
import {QUE_QUERY_MY_POST } from "../graphql"

const UserCards=(eMail)=>{
	const [List, setList] = useState([]);
	console.log("eMail",eMail.eMail);
	const {loading,error,data}=useQuery(QUE_QUERY_MY_POST,{variables: {email: eMail.eMail}, fetchPolicy: "cache-and-network"});

	useEffect(()=>{
		if(data) {setList(data.queryMyPost);
		console.log(data.queryMyPost);}
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
				<div className="footer" style={{height:"2rem"}}/>
				<p>載入中...</p>
			</div>
		)
	}
	return(
		<div className="title">
			你目前定義過的單字：
			<div className="footer" style={{height:"2rem"}}/>
			<Cards data={List}/>
		</div>
	)
}
	
export default UserCards;
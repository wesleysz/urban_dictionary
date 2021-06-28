import React, { useEffect, useState, useContext } from "react";
import Cards from "../Containers/Cards";
import { useQuery } from '@apollo/react-hooks'
import { QUE_QUERY_MY_POST } from "../graphql"
import { UserInfo } from '../App'

const UserCards=()=>{
	const userInfo = useContext(UserInfo);
	// const [List, setList] = useState([]);
	// console.log("eMail",eMail.eMail);
	const {loading,error,data}=useQuery(QUE_QUERY_MY_POST,{variables: {email: userInfo.email}, fetchPolicy: "network-only"});

	// useEffect(()=>{
	// 	if(data) {setList(data.queryMyPost);
	// 	console.log(data.queryMyPost);}
	// 	return(()=>{
	// 		console.log('home unmouted')
	// 	})
	// },[data]);
	
	// console.log("data",data);
	// console.log("error",error);
	// console.log("loading",loading);
	if( loading || !data ){
		return(
			<div className="title">
				你目前定義過的字詞：
				<div className="footer" style={{height:"2rem"}}/>
				<p>載入中...</p>
			</div>
		)
	}
	return(
		<div className="title">
			你目前定義過的字詞：
			<div className="footer" style={{height:"2rem"}}/>
			<Cards data={data.queryMyPost} />
		</div>
	)
}
	
export default UserCards;
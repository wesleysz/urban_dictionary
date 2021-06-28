import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/react-hooks'
import { useParams, useLocation } from 'react-router-dom'
import Cards from "../Containers/Cards";
import { QUE_QUERY_BY_VOCABULARY } from "../graphql";
import { NavLink } from "react-router-dom";

const Define=()=>{
	const [List, setList] = useState([]);
	const { term } = useParams();
	const check = useLocation();
	console.log("check",check);
	console.log("term",term);
	const {loading,error,data}=useQuery(QUE_QUERY_BY_VOCABULARY,{variables: {vocabulary: term},fetchPolicy: "cache-and-network"});
	useEffect(()=>{
		if(data) setList(data.queryByVocabulary);
		return(()=>{
			console.log('home unmouted')
		})
	},[data]);
	//refetch();
	console.log("data",data);
	console.log("error",error);
	console.log("loading",loading);
	console.log("List",List);
	if(!data){
		return(
			<div id="content">
				<p id="general-title">載入中...</p>
			</div>
		)
	}
	if(!List.length){
		return(
			<div className="cant-find">
				<p id="general-title">ㄟ(￣▽￣ㄟ) 找不到 找不到 (ㄏ￣▽￣)ㄏ   </p>
				{check.state?
					(check.state.pen?
						(<NavLink to={{pathname:"/add", state:{ pen:check.state.pen,name:check.state.name,email:check.state.email,wordToBeDefine:term}}}>
							<button className="botton">來去定義{term}</button>
						</NavLink>):
						(<NavLink to={{pathname:"/add", state:{name:check.state.name,email:check.state.email,wordToBeDefine:term}}}>
							<button className="botton">來去定義{term}</button>
						</NavLink>)
					):(
					<NavLink to={{pathname:"/add", state:{ wordToBeDefine:term}}}><button className="botton">來去定義{term}</button></NavLink>
					)
				}
			</div>
		)
	}
	return(
		<div id="content">
			<p id="general-title">{term}的相關結果：</p>
			{check.state?
				<Cards data={List} email={check.state.email}/>
				:
				<Cards data={List} />
			}
			
		</div>
	)
};

export default Define;
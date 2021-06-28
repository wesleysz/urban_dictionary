import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import Cards from "../Containers/Cards";
import { QUE_QUERY_BY_VOCABULARY } from "../graphql";

const Define=()=>{
	const [List, setList] = useState([]);
	const { term } = useParams();
	console.log(term);
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
			<p id="general-title">{term}的相關結果：</p>
			<Cards data={List}/>
		</div>
	)
};

export default Define;
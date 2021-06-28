import React, { useEffect, useState} from "react";
import {useQuery} from '@apollo/react-hooks'

import Cards from "../Containers/Cards";
import {QUE_QUERY_BY_VOCABULARY} from "../graphql/index";

const Define=(props)=>{
	const [List, setList] = useState([]);
	console.log(props.match.params.term);
	const {loading,error,data}=useQuery(QUE_QUERY_BY_VOCABULARY,{variables: {vocabulary: props.match.params.term},fetchPolicy: "cache-and-network"});
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
				<p>loading...</p>
			</div>
		)
	}
	return(
		<div id="content">
			<Cards data={data.queryByVocabulary}/>
		</div>
	)
};

export default Define;
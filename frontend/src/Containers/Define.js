import React from "react";
import {useQuery} from '@apollo/react-hooks'

import Cards from "../Containers/Cards";
import {QUE_QUERY_BY_VOCABULARY} from "../graphql/index";

const Define=(props)=>{
	console.log(props.match.params.term);
	let list=[];
	const {loading,error,data}=useQuery(QUE_QUERY_BY_VOCABULARY,{variables: {vocabulary: props.match.params.term},fetchPolicy: "cache-and-network"});
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
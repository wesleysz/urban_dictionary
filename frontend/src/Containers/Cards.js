import React from 'react';
import {useQuery,useLazyQuery} from '@apollo/react-hooks'

import Card from "../Components/Card";
import {QUE_QUERY_BY_STRING, QUE_QUERY_BY_VOCABULARY, QUE_QUERY_BY_USER, QUE_RANDOM_FIVE_POSTS} from "../graphql/index";

const Cards=({mode})=>{
	let list=[];
	let queryMode;
	list.push("123");
	switch(mode){
		case "random":
			queryMode=QUE_RANDOM_FIVE_POSTS;
			break;
	}
	const [qQuery,data]=useLazyQuery(queryMode);
	switch(mode){
		case "random":{
			// qQuery({variables:{number: 0}});
			// let num=data.length;
			// for(let i=0;i < num;i++){
			// 	list.push(<Card 
			// 		vocalbulary={data[i].vocalbulary}
			// 		author={data[i].author}
			// 		explanation={data[i].explanation}
			// 		example={data[i].example}
			// 		tags={data[i].tags}
			// 		agree_users={data[i].agree_users}
			// 		disagree_users={data[i].disagree_users}
			// 		create_date={data[i].create_date}
			// 	/>);
			// }
			list.push("78456");
			break;
		}
		default:

	}
	list.push("78456");
	return (
		<div>
			{list}
			{/*<p>74589</p>*/}
		</div>
	)
};

export default Cards;
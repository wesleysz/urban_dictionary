import React from 'react';
import {useQuery,useLazyQuery} from '@apollo/react-hooks'

import Card from "../Components/Card";
import {QUE_QUERY_BY_STRING, QUE_QUERY_BY_VOCABULARY, QUE_QUERY_BY_USER, QUE_RANDOM_FIVE_POSTS} from "../graphql/index";

// const Rfb=(list)=>{
// 	const {loading,error,data}=useQuery(QUE_RANDOM_FIVE_POSTS,{viriables:{number: 0}});
// 	let num=data.length;
// 	for(let i=0;i < num;i++){
// 		list.push(<Card 
// 			vocalbulary={data[i].vocalbulary}
// 			author={data[i].author}
// 			explanation={data[i].explanation}
// 			example={data[i].example}
// 			tags={data[i].tags}
// 			agree_users={data[i].agree_users}
// 			disagree_users={data[i].disagree_users}
// 			create_date={data[i].create_date}
// 		/>);
// 	}
// 	return list;
// }

const Cards=({mode})=>{
	let list=[];
	const {loading,error,data}=useQuery(QUE_RANDOM_FIVE_POSTS);
	console.log("loading",loading);
	console.log("error",error);
	console.log("data",data);
	if(loading||!data){
		return <p>loading...</p>;
	}
	let num=data.randomFivePosts.length;
	for(let i=0;i < num;i++){
		list.push(<Card 
			vocabulary={data.randomFivePosts[i].vocabulary}
			author={data.randomFivePosts[i].author}
			explanation={data.randomFivePosts[i].explanation}
			example={data.randomFivePosts[i].example}
			tags={data.randomFivePosts[i].tags}
			agree_users={data.randomFivePosts[i].agree_users}
			disagree_users={data.randomFivePosts[i].disagree_users}
			create_date={data.randomFivePosts[i].create_date}
		/>);
	}
	// let liss=[];
	// let queryMode;
	// switch(mode){
	// 	case "random":{
	// 		rfb(liss);
	// 		break;
	// 	}
	// 	default:

	// }
	return (
		<div>
			{list}
		</div>
	)
};

export default Cards;
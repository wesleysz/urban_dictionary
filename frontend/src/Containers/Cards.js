import React from 'react';
import {useQuery,useLazyQuery} from '@apollo/react-hooks'

import Card from "../Components/Card";
import {QUE_QUERY_BY_STRING, QUE_QUERY_BY_VOCABULARY, QUE_QUERY_BY_USER, QUE_RANDOM_FIVE_POSTS} from "../graphql/index";

const Cards=({data})=>{
	if(!data.length){
		return(
			<div><p>ㄇ有東東</p></div>
		);
	}
	let list=[];
	let num=data.length;
	for(let i=0;i < num;i++){
		list.push(<Card 
			vocabulary={data[i].vocabulary}
			author={data[i].author}
			explanation={data[i].explanation}
			example={data[i].example}
			tags={data[i].tags}
			agree_users={data[i].agree_users}
			disagree_users={data[i].disagree_users}
			create_date={data[i].create_date}
		/>);
	}
	return (
		<div>
			{list}
		</div>
	)
};

export default Cards;
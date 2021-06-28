import React from 'react';
import {useQuery,useLazyQuery} from '@apollo/react-hooks'

import Card from "../Components/Card";


const Cards=({data})=>{
	if(!data.length){
		return(
			<div id="general-title" >
				<p>目前還ㄇ有人定義</p>
				{/* <NavLink> */}
					<u style={{color:"#cbdce7", fontSize:"24px"}}>我要定義</u>
                {/* </NavLink>	 */}
			</div>
		);
	}
	let list=[];
	let num=data.length;
	for(let i=0;i < num;i++){
		// if(data[i].if_publish){ 
		// 	list.push(<p className="if_publish">(已發佈)</p>)
		// }
		// else{
		// 	list.push(<p className="if_publish">(未發佈)</p>)
		// }

		list.push(
			<Card 
				vocabulary={data[i].vocabulary}
				author={data[i].author}
				explanation={data[i].explanation}
				example={data[i].example}
				tags={data[i].tags}
				agree_users={data[i].agree_users}
				disagree_users={data[i].disagree_users}
				create_date={data[i].create_date}
				key={i}
			/>
		);
	}
	console.log()
	return (
		<div>
			{list}
		</div>
	)
};

export default Cards;
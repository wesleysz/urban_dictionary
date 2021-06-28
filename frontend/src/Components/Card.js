import { useState } from 'react';
import '../App.css';
import PublishBtn from './PublisheBtn';
import { Typography } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import { Space, Input, Button } from 'antd';
import { NavLink} from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import {MUT_ADD_AGREE} from '../graphql';
import Message from '../Hooks/Message';

const Card=({post_id, vocabulary,author,explanation,example,tags,agree_users,disagree_users,create_date,published, user_email})=>{
	const [add_agree] = useMutation(MUT_ADD_AGREE)
	const [agree_cnt, setAgree_cnt] = useState(agree_users.length)
	const [disagree_cnt, setDisagree_cnt] = useState(disagree_users.length)

	const handleAgree = async ()=>{
		if(!user_email || user_email.length === 0){
			Message({status:"warning", msg:"你必須先登入！"})
		}
		else{
			const {data} = await add_agree(
				{variables: {post_id: post_id, email: user_email}}
			)
			if(data.addAgree.success === true){
				setAgree_cnt( data.addAgree.agree_cnt)
				setDisagree_cnt( data.addAgree.disagree_cnt)
			}
		}
	}

	let vocabLink="/define/"+vocabulary;
	let authorLink="/author/"+author.penName;
	return (
		<div className="card">
			{published!==null?
			<div className="tags"><PublishBtn Published={published} id={post_id}/></div>
			:null
			}
			<div className="vocab">
				<p className="word"><NavLink to={vocabLink}>{vocabulary}</NavLink></p>
			</div>
			<div className="meaning">釋義：{explanation}</div>
			<div className="example">例句：{example}</div>
			<div className="author"> </div>
			<div className="card-footer"> 
				<Button onClick={handleAgree}>
					<Space size={4}> 
						<ThumbUp color="primary" />
						<Typography variant="button" display="block" gutterBottom >{agree_cnt}</Typography>
					</Space>
				</Button>
				<Button >
					<Space size={4}> 
						<ThumbDown color="primary" />
						<Typography variant="button" display="block" gutterBottom >{disagree_cnt}</Typography>
					</Space>
				</Button>
			</div>
			<div className="card-footer" > 
				<div className="text">由 
					<NavLink to={{pathname:authorLink, state:{ email: user_email}}}>{author.penName}</NavLink>
				</div>
				<div className="text">創建於 {create_date}</div>
			</div>
		</div>
	);
}

export default Card;
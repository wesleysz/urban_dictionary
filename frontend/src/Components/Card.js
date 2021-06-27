import React from 'react';
import {Typography} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input, Button } from 'antd';

const Card=({wordId})=>{
	return (
		<div className="card">
			<div className="tags">#tag1 #tag2</div>
			<div className="vocab">
				<a className="word">Vocabulary{wordId}</a>
			</div>
			<div className="meaning">explanation........</div>
			<div className="example">example..........</div>
			<div className="author"> </div>
			<div className="card-footer"> 
				<Button >
					<Space size={4}> 
						<ThumbUp color="primary" />
						<Typography variant="button" display="block" gutterBottom >12</Typography>
					</Space>
				</Button>
				<Button >
					<Space size={4}> 
						<ThumbDown color="primary" />
						<Typography variant="button" display="block" gutterBottom >2</Typography>
					</Space>
				</Button>
			</div>
			<div className="card-footer" > 
				<div style={{fontWeight:"bold", textAlign:"right", paddingBottom:"1rem"}}> by me. June 21, 2021</div>
			</div>
		</div>
	);
}

export default Card;
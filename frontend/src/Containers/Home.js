import React, { useEffect, useState, useContext } from "react";
import Cards from "../Containers/Cards";
import { useQuery } from '@apollo/react-hooks'
import { QUE_RANDOM_FIVE_POSTS } from "../graphql";
import {useLocation } from "react-router-dom";
import { UserInfo } from "../App";

const Home=()=>{
	const [List, setList] = useState([]);
	const userInfo = useContext(UserInfo);
	userInfo.setHideInput(false);
	
	const {loading,error,data}=useQuery(QUE_RANDOM_FIVE_POSTS,{variables: {number: 0}, fetchPolicy: "cache-and-network"});
	const check = useLocation();
	useEffect(()=>{
		if(data) setList(data.randomFivePosts);
		return(()=>{
			console.log('home unmouted')
		})
	},[data]);
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
			<p id="general-title">你可能會想知道：</p>
			{check.state?
				<Cards data={List} email={check.state.email}/>
				:
				<Cards data={List}/>
			}
		</div>
	)
}

export default Home;

// const Home=()=>{
// 	const [searchWord,setSearchWord]=useState("");
// 	const [searchAuthor, setSearchAuthor]=useState("");
	
// 	return (
// 		<>
// 			{/* <div className="header">
// 				<div className="row-title">
// 					<button className="homeBtn">
// 						<NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
// 					</button>
// 					<div className="row-title-bottons" >
// 						<Space size={18}>
// 							<NavLink to="/add"><Button className="botton">新增單字</Button></NavLink> 
// 							<NavLink className="botton" to={{pathname:"/User", state:{id:100, name:userName, isLogined:isLogin}}}><Button className="botton">應該會變成使用者名稱</Button></NavLink> 
// 							<GoogleBtn className="botton" login={login} logout={logout} isLogined={isLogin}></GoogleBtn>
// 						</Space>
// 					</div>
// 				</div>
// 				<div className="row-bar" >
// 					<Input.Search
// 						style={{ width: "100%"}} 
// 						placeholder="敬愛的網友，想探聽點什麼？"
// 						allowClear
// 						enterButton="搜尋"
// 						size="large"
// 						// onSearch={}
// 					/>
// 				</div>
// 			</div> */}
// 			<div id="content">
// 				<Cards mode={"random"}/>
// 			 </div>
// 			{/*<div className="footer" /> */}
// 		</>
// 	);
// }

// export default Home;
// // export default class Home extends Component{
// // 	render(){
// // 		return (
// // 			<div>
// // 				<button>
// // 					<NavLink to="/home">Home</NavLink>
// // 				</button>
// // 				// <button>
// // 				// 	<NavLink to="/login">Log In</NavLink>
// // 				// </button>
// // 				<GoogleBtn/>
// // 				<button>
// // 					<NavLink to="/add">Add</NavLink>
// // 				</button>
// // 				<button>
// // 					<NavLink to="/user">User</NavLink>
// // 				</button>
// // 				<input type="search"/>
// // 				<button>
// // 					<NavLink to="/search">Search</NavLink>
// // 				</button>
// // 				<input type="search"/>
// // 				<button>
// // 					<NavLink to="/author">Author</NavLink>
// // 				</button>
// // 				<hr />
// // 				<Switch>
// // 					<Route path="/login" component={LogIn} />
// // 					<Route path="/add" component={Add} />
// // 					<Route path="/user" component={User} />
// // 					<Route path="/search" component={Search} />
// // 					<Route path="/author" component={Author} />
// // 					<Redirect from="/home" to="/" />
// // 				</Switch>
// // 			</div>
// // 		);
// // 	}
// // }
// {/* <button>
// <NavLink to="/home">Home</NavLink>
// </button>
// // <button>
// // 	<NavLink to="/login">Log In</NavLink>
// // </button>
// <GoogleBtn/>
// <button>
// <NavLink to="/add">Add</NavLink>
// </button>
// <button>
// <NavLink to={{pathname:"/user", state: { fromDashboard: true }}} >User</NavLink>
// </button>
// <Input.Search
// placeholder="Enter the author"
// value={searchAuthor}
// enterButton="Search"
// onChange={(e)=>{setSearchAuthor(e.target.value)}}
// ></Input.Search>

// <hr /> */}
import './App.css';
import React, { useState } from "react";
import { NavLink, Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Add from "./Components/Add";
import NotLogin from "./Components/NotLogin";
import User from "./Containers/User";
import Home from "./Containers/Home";
import Author from "./Containers/Author";
import Define from "./Containers/Define";
import GoogleBtn from "./Components/GoogleBtn"
import icon from "./imgs/icon.png";
import Message from './Hooks/Message';
import { MUT_USER_LOGIN } from "./graphql"
import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { Space, Input } from 'antd';

function App() {
  const [startLogin] = useMutation(MUT_USER_LOGIN)
  const [userName, setuserName]=useState("");
  const [userEmail, setuserEmail]=useState("");
  const [imageUrl,setImageUrl]=useState("");
  const [userpenName, setuserpenName]=useState(undefined);
  const [searchWord, setSearchWord]=useState("");
	const [isLogin, setisLogin]=useState(false);

	const  login = async (googleUser) =>{
		const profile = googleUser.getBasicProfile();
		setuserName(profile.getName());
		setuserEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
		setisLogin(true);
    const {data} = await startLogin({variables:{name:profile.getName(), email:profile.getEmail()}})
    setuserpenName(data.userLogin.penName)
  }

	const logout =  () => {
		setuserName("");
    setuserEmail("");
		setisLogin(false);
    setuserpenName(undefined);
    Message({status: "success", msg: "登出成功！"});
    <Redirect exact={true} from="/user" to="/" />
	}

  const queryAgain = async () => {
		const {data} = await startLogin({variables:{name:userName, email:userEmail}})
    setuserpenName(data.userLogin.penName)
	}

	return (
		<BrowserRouter>
      <div className="background">
        <div className="header">
          <div className="row-title">
            <button className="homeBtn">
              <NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
            </button>
            <div className="row-title-bottons" >
              <Space size={18}>
              {isLogin?<NavLink to={{pathname:"/add", state:{ pen:userpenName,name:userName,email:userEmail}}}><Button className="botton" >我要定義詞語</Button></NavLink>:null}
              {isLogin?<NavLink to={{pathname:"/user", state:{ pen:userpenName ,name:userName, email:userEmail}}}>
              <Button className="botton">{userName} <img id="profileImage" src={imageUrl} /></Button></NavLink> :null}
            <GoogleBtn className="botton" login={login} logout={logout} isLogined={isLogin}></GoogleBtn>
              </Space>
            </div>
          </div>
          <div className="row-bar" >
            <Route render={({history})=>(
              <Input.Search
                className="search-bar"
                placeholder="嗨？"
                allowClear
                enterButton="搜尋"
                size="large"
                value={searchWord}
                onChange={(e)=>{
                  setSearchWord(e.target.value);
                }}
                onSearch={(term)=>{
          				if(term.length===0){
                    Message({status:'warning', msg:"請輸入搜尋內容！"})
                    return;
                  }
                  const path="/define/"+term;
          				history.push(path);
                  setSearchWord("");
                }}
              ></Input.Search>
            )}/>
          </div>
        </div>
          <Switch>
            <Route exact={true} path="/login" component={LogIn} />
            <Route exact={true} path="/define" component={Define} />
            <Route exact={false} path="/define/:term?" component={Define} />
            <Route exact={true} path="/add" component={Add} />
            <Route exact={true} path="/add/notLogin" component={NotLogin}/>
            <Route exact={true} path="/user" render={()=>(<User afunction={queryAgain} />)} />
            <Route exact={true} path="/user/notLogin" component={NotLogin}/>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/author" component={Author} />
            <Route exact={false} path="/author/:penname?" component={Author} />
            <Redirect exact={true} from="/home" to="/" />
          </Switch>
        <div className="footer" />
      </div>
		</BrowserRouter>     
	);
}
export default App;

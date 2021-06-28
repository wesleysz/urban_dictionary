import { NavLink, useLocation, Redirect } from "react-router-dom";
import { Button} from '@material-ui/core';

const SuccessAdd = ()=>{
	const check = useLocation();
	if(!check.state){
		return(
			<Redirect exact={true} from="/add/success" to={{pathname:"/home"}} />
		)
	}
	const {email, name, pen} = check.state;
	console.log("[SuccessAdd]", email, name, pen)
	return(
		<div className="add">
			<div className="add-close">
				<NavLink to="/home">
					<Button variant="contained" color="primary" className="botton" >回首頁</Button>
				</NavLink>
			</div>
			<div className="add-title" style={{marginTop:"5rem"}}>
                <p>恭喜你，成功定義啦！</p>
				<NavLink to={{pathname:"/add", state:{ pen, name,email }}}>
						<u style={{color:"#cbdce7", fontSize:"24px"}}>再來一個</u>
				</NavLink>
			</div>
		</div>
	);
}

export default SuccessAdd;
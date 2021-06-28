import { NavLink,useLocation } from "react-router-dom";
import { Button} from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';

const NotLogin = ()=>{
	const check=useLocation();
	console.log(check);
	return(
		<div className="add">
			<div className="add-close">
				<NavLink to="/home">
					<Button variant="contained" color="primary" className="botton" >回首頁</Button>
				</NavLink>
			</div>
			<div className="add-title" style={{marginTop:"5rem"}}>
                <p>您尚未登入帳號</p>
                <p style={{color:"#cbdce7"}}>
                    點選右上角登入
                    <CallMadeIcon style={{color:"#cbdce7", height:"30px", width:"30px"}}></CallMadeIcon>
                </p>
			</div>
			
			
			
		</div>
	);
}

export default NotLogin;
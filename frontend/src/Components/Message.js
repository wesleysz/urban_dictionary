import {  message } from 'antd';

const Message = ({status, msg})=>{
    switch(status){
        case "success":
            message.success(msg);
            break
        case "error":
            message.error(msg);
            break;
        case "warning":
            message.warning(msg);
            break;
        default:
            break
    }
}

export default Message;
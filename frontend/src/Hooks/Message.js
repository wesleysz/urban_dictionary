import {  message } from 'antd';

export default function Message({status, msg}){
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
};
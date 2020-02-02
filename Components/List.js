import React from "react";
import { useSelector } from "react-redux";

export const  List = () => {
const users = useSelector(state => state.users);    

return(
<ul>{users.map(user => (<li key={user.name}>{user.name}</li>))}</ul>);}


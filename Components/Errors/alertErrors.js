import React from 'react';
import { Alert } from "antd";

export const AlertError = (props) =>{
    return <Alert
    message="Error"
    description={"Houston, we have a problem: "+props.message}
    type="error"
    showIcon
  />
}
import React, { useState } from 'react';
import { Input, Form, Icon } from 'antd';

export const PasswordChangeForm = (props) => {
    const [password,Setpassword] = useState('');
    const [passwordError, SetpasswordError] = useState(null)
    const [error,Seterror] = useState('error')

    const handleOnSubmit = () => {
        if(password.length < 6){
            SetpasswordError('Password must be more than 6 characters')
        }
    }

    return(

        <Form>
             <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Current Password" value={props.password}
            />
        </Form.Item>
        <Form.Item validateStatus={!!passwordError ? {error}: ''} >
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="New password"
              id="password"
              onChange={(event) => Setpassword(event.target.value)}
              value={password}
            />
        </Form.Item>
        <button  />
        </Form>
    )

}
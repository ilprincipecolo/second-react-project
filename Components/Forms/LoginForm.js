import React, { useState } from "react";
import { Input, Button } from "antd";

export const LoginForm = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorsPassword, setErrorsPassword] = useState;

  function validate() {
    const errors = {}
    if({password}.Lenght === 0)
    return setErrorsPassword("Invalid password")
    this.props.handleOnSubmit()
  }

  return (
    <div>
      <h1>Insert name of user:</h1>
      <Input
        value={name}
        type='text'
        id='title'
        onChange={event => setName(event.target.value)}
        placeholder='Insert username...'
      ></Input>
      {!!errorsPassword ? "null" : null}
      <Input
        value={password}
        type='password'
        id='password'
        onChange={event => setPassword(event.target.value)}
        placeholder='Insert password...'
      ></Input>
      <Button
        type='submit'
        onClick={() => this.validate}
        loading={props.loading}>
        ADD
      </Button>
    </div>
  );
};

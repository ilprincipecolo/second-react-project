import { login } from "../../actions/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Layout, Col, Row, Form, Icon } from "antd";
import { AlertError } from "../Errors/alertErrors";
const { Header, Content } = Layout;

//2 method to use Redux with Hooks
export const LoginPageH = ({ history }) => {
  const dispatch = useDispatch();

  var { status, errorsLogin, userLogged } = useSelector(state => ({
    status: state.userLogging,
    errorsLogin: state.errorsLogin,
    userLogged: state.userLogged
  }));
  const [name, SetName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(login({ name, password }));
  };

 
  if(!status && !!userLogged){
   history.push("/dashboard")
  console.log("Ci sono")
  }

  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>Login</h1>
      </Header>
      <Content>
        <br />
        <Row>
          <Col span={12} offset={6}>
            <Form>
              <Form.Item>
                <Input
                  type='text'
                  value={name}
                  placeholder='Insert name'
                  onChange={e => SetName(e.target.value)}
                  prefix={
                    <Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type='password'
                  value={password}
                  placeholder='Insert password ...'
                  onChange={e => setPassword(e.target.value)}
                  prefix={
                    <Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => handleSubmit()}
                  loading={status}
                  type='primary'
                  className='login-form-button'
                >
                  Login
                </Button>
                {!!errorsLogin && !status ? (
                  <AlertError message='User not found or password wrong' />
                ) : 
                  ""
                }
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

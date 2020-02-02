import {PasswordChangeForm} from '../Forms/PasswordChangeForm'
import React from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Row,Col } from "antd";
const { Meta } = Card;


export const Profile = () => {
  var user = useSelector(state => state.userLogged);
  return (
    <Row>
    <Col span={24} offset={3}><h1>Profile:</h1></Col>
      <Col span={12} offset={6}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt='example'
              src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            />
          }
        >
          <Meta
            avatar={
              <Avatar src='https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg' />
            }
            title={user.name}
            description={
              "Hey, I want remember to your password: " + user.password
            }
          />
          <PasswordChangeForm password={user.password}/>
        </Card>
      </Col>
    </Row>
  );
};

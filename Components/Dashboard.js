import React from "react";
import { connect } from "react-redux";
import { fetchData, userLoggedIn } from "../actions/index";
import { DataPageHooks } from "../Components/PagesHook/H_DataPage";
import {Profile} from '../Components/PagesHook/H_ProfilePage'
import { AlertError } from "../Components/Errors/alertErrors";

//Ant design
import { Layout, Menu, Icon, Col, Row } from "antd";
const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedItem: 1,
      showProfile: false
    };
  }
  componentDidMount() {
    this.props.userLoggedIn({name: "dallas",password: '123'})
    this.props.fetchData();
  }
  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  handleOnProfile = () =>{
      this.setState({showProfile: !this.state.showProfile})
  }



  render() {
    console.log(this.props.userLogged)

    if (this.props.userLogged == null)
      return <AlertError message='You need to be logged' />;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={[this.state.selectedItem]}>
            <Menu.Item key='1' onClick={this.handleOnProfile}>
              <Icon type='user' />
              <span>{this.props.userLogged.name}</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='header'>
            <Row>
              <Col span={4}>
                <Icon
                  className='trigger'
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.handleToggle}
                />
              </Col>
              <Col span={12}>
                <h1>NBA players</h1>
              </Col>
            </Row>
          </Header>
          <Content className='dashContent' style={{minHeight: 600}}>
          {this.state.showProfile? <Profile />: <DataPageHooks />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchData,
  userLoggedIn
};
const mapStateToProps = state => {
  return {
    data: state.data,
    userLogged: state.userLogged
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

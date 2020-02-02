import {LoginForm} from '../Forms/LoginForm'
import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false
         };
    }

    handleSubmit = (data) => {
        console.log(data)
        this.setState({loading : true})
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit} loading={this.state.loading} />
        );
    }
}

export default LoginPage;
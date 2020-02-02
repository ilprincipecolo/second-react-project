import React from 'react';
import { Link } from 'react-router-dom';
import { LoginPageH } from './PagesHook/H_LoginPage';
import Dashboard from './Dashboard';

export const HomePage = () => {
    return(<div>
       <Link to="login" exact component = {LoginPageH} />
    </div>)
}
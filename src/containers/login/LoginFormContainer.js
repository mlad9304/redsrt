import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import LoginForm from 'components/login/LoginForm';
import CheckBox from 'components/common/CheckBox';

import './LoginFormContainer.scss';

class LoginFormContainer extends Component {
    render() {
        return (
            <div>
                <LoginForm />
                <CheckBox label="Stay signed in" checked={true}/>

                <div className="link_bar">
                    <NavLink to="/sign-up">Create account</NavLink>
                    <span>|</span>
                    <NavLink to="/recover/password">Reset password</NavLink>
                </div>
            </div>
        );
    }
}

export default LoginFormContainer;
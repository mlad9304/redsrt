import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import LoginForm from 'components/login/LoginForm';
import CheckBox from 'components/common/CheckBox';

import './LoginFormContainer.scss';

class LoginFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: false
        }
    }
    
    handlerChange = (e) => {
        const {type, value} = e.target;

        this.setState({
            [type]: value
        });
    }

    handleCheckboxChange = (e) => {
        const checked = !this.state.checked;
        this.setState({
            checked
        })
    }

    handlerLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <LoginForm 
                    onLogin={this.handlerLogin} 
                    onChange={this.handlerChange}
                    email={this.state.email}
                    password={this.state.password}
                    />

                <CheckBox label="Stay signed in" 
                    checked={this.state.checked} 
                    onChange={this.handleCheckboxChange}/>

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
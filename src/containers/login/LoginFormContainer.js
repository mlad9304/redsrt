import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from 'components/login/LoginForm';
import CheckBox from 'components/common/CheckBox';

import './LoginFormContainer.scss';

import { logIn, LOGIN } from 'api/modules/auth';
import { requestSuccess, requestFail } from 'utils/request'

class LoginFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            staySignedIn: false
        }
    }
    
    handlerChange = (e) => {
        const {type, value} = e.target;

        this.setState({
            [type]: value
        });
    }

    handleCheckboxChange = (e) => {
        const staySignedIn = !this.state.staySignedIn;
        this.setState({
            staySignedIn
        })
    }

    handlerLogin = (e) => {
        e.preventDefault();
        
        const { logIn } = this.props;
        logIn({ body: { ...this.state } });
    }

    componentWillReceiveProps(newProps) {
        if(newProps.status === requestSuccess(LOGIN)) {
            console.log('success');
            console.log(newProps);
        } 
        if(newProps.status === requestFail(LOGIN)) {
            console.log('fail');
        }
    }
    render() {

        const { email, password, staySignedIn } = this.props;

        return (
            <div>
                <LoginForm 
                    onLogin={this.handlerLogin} 
                    onChange={this.handlerChange}
                    email={email}
                    password={password}
                    />

                <CheckBox label="Stay signed in" 
                    checked={staySignedIn} 
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

const props = (state, ownProps) => {
    const { token, status, error } = state.auth;
    
    return { token, status, error, ownProps };
}

const actions = {
    logIn,
}

export default connect(props, actions)(LoginFormContainer);
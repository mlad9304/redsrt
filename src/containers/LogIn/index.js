import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logIn } from 'api/modules/auth'

import styles from './styles.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class LogIn extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      staySignedIn: false,
    }
  }

  handleChange = (field, evt) => {
    const { target: { type, checked, value } } = evt
    this.setState({
      [field]: type === 'checkbox' ? checked : value,
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const { logIn } = this.props
    logIn({ body: { ...this.state } })
  }

  render() {
    const { email, password, staySignedIn } = this.state

    return (
      <div className={cx("loginPage")}>
        <div className={cx("wrapper")}>
          <div className={cx("loginForm")}>
            <div className={cx("loginForm__title")}>
              <img src="https://d1xvn5mjulg4qv.cloudfront.net/3.0.0/images/logo@3x.png" alt="" />
            </div>

            <div className={cx("loginForm__content")}>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input className={cx("field")} placeholder="Email" type="email" onChange={evt => this.handleChange('email', evt)} value={email} required autoFocus />
                </div>
                <div>
                  <input className={cx("field")} placeholder="Password" type="password" onChange={evt => this.handleChange('password', evt)} value={password} required />
                </div>
                <div>
                  <button className={cx("large", "form", "button")}>Sign in</button>
                </div>
                <div className={cx("checkbox")}>
                  <input id="stay-signed-in" type="checkbox" checked={staySignedIn} onChange={evt => this.handleChange('staySignedIn', evt)} />
                  <div id="stay-signed-in-replacer" className={staySignedIn ? 'checked' : 'unchecked'} />
                  <label id="stay-signed-in-label">Stay signed in</label>
                </div>
                <div>
                  <NavLink to="/sign-up">Create account</NavLink>
                  <span>|</span>
                  <NavLink to="/recover/password">Reset password</NavLink>
                </div>
              </form>
            </div>
          </div>
          <p className={cx("contactUs")}>
            <a href="mailto:support@boilerplatebuilder.com">Contact us</a>
          </p>
          <p className={cx("copyRight")}>© Breck Inc. 2018, All Rights Reserved</p>
        </div>
        <button className={cx("general-help-button")}>?</button>
      </div>
    )
  }
}

LogIn.propTypes = {
  logIn: PropTypes.func,

};

const actions = {
  logIn,
}

export default connect(null, actions)(LogIn)

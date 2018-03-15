import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './styles.scss'

class LogIn extends Component {

  constructor(props) {
    super(props)
    
  }

  

  render() {

    return (
      <div>
        Login Container
      </div>
    )
  }
}

const actions = {
  
}

export default connect(null, actions)(LogIn)

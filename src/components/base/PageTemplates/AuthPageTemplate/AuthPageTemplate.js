// @flow
import React from 'react';
import './AuthPageTemplate.scss';


const AuthPageTemplate = ({form}) => {
  return (
    <div className="page">
        <div className="wrapper">
            <div className="form">
                <div className="title">
                <img src="https://d1xvn5mjulg4qv.cloudfront.net/3.0.0/images/logo@3x.png" alt="" />
                </div>

                <div className="content">
                {form}
                </div>
            </div>
            <p className="contactUs">
                <a href="mailto:support@boilerplatebuilder.com">Contact us</a>
            </p>
            <p className="copyRight">© Breck Inc. 2018, All Rights Reserved</p>
        </div>
        <button className="general-help-button">?</button>
      </div>
  );
};

export default AuthPageTemplate;

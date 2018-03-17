import React from 'react';
import AuthPageTemplate from 'components/base/PageTemplates/AuthPageTemplate';
import LoginFormContainer from 'containers/login/LoginFormContainer';

const Login = () => {
  return (
    <AuthPageTemplate
        form={<LoginFormContainer />}
    />
  );
};

export default Login;

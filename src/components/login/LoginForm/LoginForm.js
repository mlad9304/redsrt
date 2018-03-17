// @flow
import React from 'react';
import './LoginForm.scss';

import Input from 'components/common/Input';
import Button from 'components/common/Button';


const LoginForm = () => {
  return (
    <form>
        <Input type="email" placeholder="Email" required={true} autoFocus={true} />
        <Input type="password" placeholder="Password" required={true} />
        
        <Button style="large form button">Sign in</Button>
    </form>
    
  );
};

export default LoginForm;

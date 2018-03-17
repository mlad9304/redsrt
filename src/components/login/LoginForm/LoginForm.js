// @flow
import React from 'react';
import './LoginForm.scss';

import Input from 'components/common/Input';
import Button from 'components/common/Button';


const LoginForm = ({
  onChange,
  onLogin,
  email,
  password
}) => {
  return (
    <form>
        <Input type="email" placeholder="Email" required={true} autoFocus={true} onChange={onChange} value={email}/>
        <Input type="password" placeholder="Password" required={true}  onChange={onChange} value={password}/>
        
        <Button styles="large form button" onClick={onLogin}>Sign in</Button>
    </form>
    
  );
};

export default LoginForm;

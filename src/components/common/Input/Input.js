import React from 'react';
import './Input.scss';

const Input = ({type, placeholder, required = false, autoFocus = false}) => {
    return (
        <div>
            <input className="field" placeholder={placeholder} type={type} required={required} autoFocus={autoFocus} />
        </div>
    );
}

export default Input;
import React from 'react';
import './Input.scss';

const Input = ({
    ...rest
}) => {
    return (
        <div>
            <input className="field" {...rest} />
        </div>
    );
}

export default Input;
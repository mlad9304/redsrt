import React from 'react';
import './Button.scss';

const Button = ({style, children}) => {
    return (
        <div>
            <button className={style}>{children}</button>
        </div>
    );
}

export default Button;
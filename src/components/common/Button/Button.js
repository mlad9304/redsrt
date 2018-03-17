import React from 'react';
import './Button.scss';

const Button = ({style, children, ...rest}) => {
    return (
        <div>
            <button className={style} {...rest}>{children}</button>
        </div>
    );
}

export default Button;
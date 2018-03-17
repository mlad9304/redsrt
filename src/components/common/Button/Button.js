import React from 'react';
import './Button.scss';

const Button = ({styles, children, ...rest}) => {
    return (
        <div>
            <button className={styles} {...rest}>{children}</button>
        </div>
    );
}

export default Button;
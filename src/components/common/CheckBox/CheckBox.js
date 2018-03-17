import React from 'react';
import cx from 'classnames';

import './CheckBox.scss';

const CheckBox = ({label, checked, ...rest}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" {...rest}/>
            <div className={cx({checked})} />
            <label>{label}</label>
        </div>
    );
}

export default CheckBox;
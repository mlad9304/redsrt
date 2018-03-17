import React from 'react';
import cx from 'classnames';

import './CheckBox.scss';

const CheckBox = ({label, checked}) => {
    return (
        <div className="checkbox">
            <input type="checkbox"/>
            <div className={cx({checked})} />
            <label>{label}</label>
        </div>
    );
}

export default CheckBox;
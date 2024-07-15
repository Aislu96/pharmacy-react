import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ to, onClick, type, children, className, icon }) => {
    const classes = `button ${className ? className : ''}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {icon && <img src={icon} alt="button icon" />}
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
            {icon && <img src={icon} alt="button icon" />}
        </button>
    );
};


export default Button;

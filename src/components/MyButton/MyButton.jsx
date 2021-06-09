import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";


const buttonClasses = variant =>
    classNames({
        'text-white bg-mytheme-beigepink hover:bg-indigo-700 focus:outline-node focus:ring-indigo-500': !variant || variant === 'primary',
        'border-transparent group hover:bg-mytheme-shell': variant === 'minimal',
        'inline-flex items-center relative p-2 border rounded-md text-sm font-medium text-mytheme-charcoal group-hover:text-gray-900 font-medium': true
    });

export const MyButton = ({ variant, label, onClick }) => {
    console.log(label, variant)
    return (
        <button className={buttonClasses(variant)} onClick={onClick}>
            {label}
        </button>
    )
}


MyButton.propTypes = {
    variant: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
};


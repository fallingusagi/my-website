import React from 'react';
import PropTypes from 'prop-types';

export const CardImage = ({imageSrc}) => {
    return(imageSrc === null ? <img/> : <img className="w-full object-cover" src={imageSrc} />
    )
}

CardImage.propTypes = {
    imageSrc: PropTypes.string
}
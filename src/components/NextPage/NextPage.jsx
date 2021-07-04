import React from "react";
import PropTypes from 'prop-types';
import { ArrowForwardRounded } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { MyButton } from '../MyButton/MyButton';

export const NextPage = ({ onClick, pageLink, pageLabel }) => {
    return (
        <div className="inline-flex space-x-1 br-2 rounded-md background-mytheme-shell justify-self-end">
            <Link to={pageLink}>
                <MyButton
                variant={"minimal"} 
                label={pageLabel}>
                </MyButton>
                <ArrowForwardRounded className="animate-bouncelr h-4" />
            </Link>
            
        </div>
    )
};

NextPage.propTypes = {
    onClick: PropTypes.func,
    pageLink: PropTypes.string,
    pageLabel: PropTypes.string,
};

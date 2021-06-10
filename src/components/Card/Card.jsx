import React from 'react';
import PropTypes from 'prop-types';
import { CardImage } from './CardImage';
import { useHistory } from 'react-router-dom'

export const Card = ({ imageSrc, title, body, award, awardName, pageLink }) => {
    const history = useHistory();

    const handleClick = (link) => {
        history.push(link)
    }

    return(
        <div className="cursor-pointer rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent" onClick={() => handleClick(pageLink)}>
        <CardImage imageSrc={imageSrc} />
        <div className="p-4 space-y-1">
            <div className="inline-flex flex-wrap items-center justify-start space-y-1">
                <p className="pr-2 font-medium text-mytheme-charcoal group-hover:text-gray-900">{title}</p>
                {award &&
                    <div className="inline-flex items-center h-6 py-1 px-2 space-x-2 rounded-lg bg-mytheme-beigegray bg-opacity-25">
                        <svg className="h-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                            <path d="M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z" />
                        </svg>
                        <p className="font-medium text-xs text-mytheme-charcoal">{awardName}</p>
                    </div>
                }
            </div>
            <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{body}</p>
        </div>
    </div>

    )
}

Card.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    award: PropTypes.bool,
    awardName: PropTypes.string,
    pageLink: PropTypes.string,
};

Card.defaultProps = {
    title: "ERR MISSING TITLE",
    body: "ERR MISSING BODY"
}
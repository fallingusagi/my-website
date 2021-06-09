import React, { useEffect, useState, useRef } from 'react';
import PropTypes from "prop-types";
import { MyButton } from '../MyButton/MyButton';

export const Dropdown = ({ variant, onClick }) => {
    const node = useRef();
    
    const [isShown, setIsShown] = useState(false);

    const dropdownClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setIsShown(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", dropdownClick);
        return () => {
            document.removeEventListener("mousedown", dropdownClick);
        };
    }, []);

    return (
        <div ref={node}>
            <MyButton 
                variant={"minimal"} 
                label={"🤙 Let's chat!"} 
                onClick={() => setIsShown(!isShown)}/>
            { isShown &&
                <div className="z-30 absolute bottom--1 w-max rounded-lg shadow-lg">
                    <div className="py-1 px-4 divide-y divide-mytheme-shell w-max rounded-lg bg-white" role="none">
                        <a href="https://wa.me/+6590529042" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">
                            <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" /></svg>
                            <div className="px-1"></div>
                            {"+65 9052 9042"}</a>
                        <a href="mailto:tanlisarah@gmail.com" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">
                            <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
                            </svg>
                            <div className="px-1"></div>
                            {"Email"}</a>
                        <a href="https://www.linkedin.com/in/sarahtanli/" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
                            <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M11.4521492,9.45214919 C11.935252,9.15825757 12.4822556,9 13,9 L14,9 C15.3939534,9 17,10.1471761 17,12 L17,16 L15,16 L15,12 C15,11.4242524 14.4060466,11 14,11 L13,11 C12.5939534,11 12,11.4242524 12,12 L12,16 L10,16 L10,9 L11,9 L11.4521492,9.45214919 Z M8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 C8.55228475,6 9,6.44771525 9,7 C9,7.55228475 8.55228475,8 8,8 Z M9,16 L7,16 L7,9 L9,9 L9,16 Z" fillRule="evenodd" />
                            </svg>
                            <div className="px-1"></div>
                            {"LinkedIn"}</a>
                    </div>
                </div>
            }
        </div>

    );
};

Dropdown.propTypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func,
};



import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Donut0 from '../../assets/donut0.svg';
import { Dropdown } from '../Dropdown/Dropdown';

export function Header({level}) {
    const [smallHeader, setSmallHeader] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmallHeader(window.pageYOffset > 100)
            );
        }
    }, []);

    return (
        <div
            className={
                smallHeader
                    ? "transition-all ease-in-out fixed inline-flex items-center w-full z-50 overflow-visible px-24 xl:px-40 py-2 space-x-4 sm:space-x-8 bg-mytheme-pearl bg-opacity-90 shadow-sm backdrop-blur"
                    : "transition-all ease-in-out fixed inline-flex items-center w-full z-50 overflow-visible px-24 xl:px-40 py-6 space-x-4 sm:space-x-8"
            }>
            {smallHeader &&
                <img className="h-8 w-8" src={Donut0} />
            }
            {level=="L2" &&
                <p>{"Back to home"}</p>
            }
            <div className="flex-grow"></div>
            <Dropdown/>
        </div>

    )
}

Header.propTypes = {
    level: PropTypes.string,
};
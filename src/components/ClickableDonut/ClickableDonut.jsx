import React from "react";
import PropTypes from 'prop-types';
import Donut0 from '../../assets/donut0.svg';
import Donut1 from '../../assets/donut1.svg';
import Donut2 from '../../assets/donut2.svg';
import Donut3 from '../../assets/donut3.svg';
import Donut4 from '../../assets/donut4.svg';
import DonutBurst from './DonutBurst';

const DonutSVG = (donutSrc, onClick) => {
    <div className="absolute top-20 right-12">
        <img className="h-16 animate-bounce cursor-pointer" src={donutSrc} onClick={onClick} />
    </div>
}

DonutSVG.proptypes = {
    donutSrc: PropTypes.any,
    onClick: PropTypes.func,
}

export const ClickableDonut = (noOfBites, setNoOfBites) => {

    return (
        <div>
            {noOfBites == 0 && <DonutSVG src={Donut0} onClick={setNoOfBites(1)} />}
            {noOfBites == 1 && <DonutSVG src={Donut1} onClick={setNoOfBites(2)} />}
            {noOfBites == 2 && <DonutSVG src={Donut2} onClick={setNoOfBites(3)} />}
            {noOfBites == 3 && <DonutSVG src={Donut3} onClick={setNoOfBites(4)} />}
            {noOfBites == 4 && <DonutSVG src={Donut4} onClick={setNoOfBites(0)} />}
            {noOfBites == 4 && <DonutBurst/>}

        </div>
    );

}

ClickableDonut.proptypes = {
    noOfBites: PropTypes.number,
    setNoOfBites: PropTypes.func,
}


import React from 'react';
// import PropTypes from "prop-types";
import mojs from '@mojs/core';
import Donut4 from '../../assets/donut4.svg';

const burstObj = {
    className: "BurstSimple",
    radius: { 0: 100 },
    count: 10,
    duration: 1000,
    children: {
        shape: ["circle", "polygon"],
        fill: ["#fff", "#eee", "#ddd", "#FC46AD", "#F64040"],
        degressShift: "rand(-360, 360)",
        delay: "stagger(0,25)",
    }
}
const buttonBurstsPool = [
    new mojs.Burst(burstObj),
    new mojs.Burst(burstObj),
    new mojs.Burst(burstObj),
    new mojs.Burst(burstObj),
];

let burstIndex = 0;

const DonutBurst = ({ ...props }) => {
    return (
        <img 
            {...props}
            className="h-16 animate-bounce cursor-pointer" src={Donut4}
            onClick={() => {
                buttonBurstsPool[burstIndex]
                    .generate()
                    .replay();
                burstIndex =
                    burstIndex >= buttonBurstsPool.length - 1 ? 0 : burstIndex + 1;
                
            }}
        />
    )
}

// DonutBurst.propTypes = {
//     onClick: PropTypes.func,
// }

export default DonutBurst;
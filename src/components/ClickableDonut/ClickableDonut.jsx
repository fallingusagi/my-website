import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import Donut0 from '../../assets/donut0.svg';
import Donut1 from '../../assets/donut1.svg';
import Donut2 from '../../assets/donut2.svg';
import Donut3 from '../../assets/donut3.svg';
import Donut4 from '../../assets/donut4.svg';
import mojs from '@mojs/core';

// const burst = new mojs.Burst({
//     radius: { 0: 100 },
//     count: 5,
//     children: {
//         shape: 'circle',
//         radius: 20,
//         fill: ['deeppink', 'cyan', 'yellow'],
//         strokeWidth: 5,
//         duration: 2000
//     }
// });

// document.addEventListener('click', function (e) {
//     console.log("ASDASDASDSAD")
//     burst
//         .tune({ x: e.pageX, y: e.pageY })
//         .setSpeed(3)
//         .replay();
// });

const burstObj = {
    parent: document.body,
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


export const ClickableDonut = ({ burstCallBack, resetCallBack }) => {
    const [numBites, setNumBites] = useState(0)
    const [currSVG, setCurrSVG] = useState(Donut0)


    useEffect(() => {
        if (numBites == 0) {
            setCurrSVG(Donut0);
            resetCallBack();
        }
        else if (numBites == 1) setCurrSVG(Donut1);
        else if (numBites == 2) setCurrSVG(Donut2);
        else if (numBites == 3) setCurrSVG(Donut3);
        else if (numBites == 4) {
            setCurrSVG(Donut4);
            burstCallBack();
        }

    }, [numBites])


    const bite = (event) => {
        setNumBites((numBites + 1) % 5)
        console.log(event.pageX, event.pageY)

    }

    return (
        <img className="h-16 box-border animate-bounce cursor-pointer" src={currSVG} onClick={(event) => {
            bite(event)
            // buttonBurstsPool[burstIndex]
            //     .tune({ x: event.pageX, y: event.pageY })
            //     .generate()
            //     .replay();
            // burstIndex = burstIndex >= buttonBurstsPool.length - 1 ? 0 : burstIndex + 1;
        }
        } />
    );

}

ClickableDonut.propTypes = {
    burstCallBack: PropTypes.func,
    resetCallBack: PropTypes.func,

}
import React from 'react';
import ProjectOC from '../assets/ProjectOC.png';
import OC1 from '../assets/OC1.png'
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPageOC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectOC} />

                    <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                        {"digital, print media for One Community"} </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                        {"One Community"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                        {"One Community is the youth community within Covenant Community Methodist Church, "}
                        {"where I craft visuals that tell stories for various events and initiatives. "}
                        {"Here are a few of the pieces I particularly like."}
                    </p>

                    <img src={OC1} />
                    <NextPage pageLink={"/projectAO"} pageLabel={"Next up: Misc projects"} />
                </div>
            </div>
        </div>
    );
};
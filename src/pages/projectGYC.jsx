import React from 'react';
import ProjectGYC from '../assets/ProjectGYC.png';
import GYC1 from '../assets/GYC1.png'
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPageGYC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectGYC} />
                    <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                        {"digital, print media for Osaka YMCA"} </p>
                    <div className="space-y-4">
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                            {"Osaka YMCA Global Youth Conference"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"Hosted by Osaka YMCA, the Global Youth Conference aims to encourage cultural exchange "}
                            {"and develop social awareness among young people from all over the world."}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"The 4th edition explores themes of Mental Health and Articifical Intelligence, their roles and impact "}
                            {"in our societies, various cultural responses, and practical resolutions we can make to "}
                            {"approach these areas in our lives."}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"I crafted the visual identity, event banners, and participant and facilitator handbook, and handled "}
                            {"event photography and videography, producing a commemorative video for the conference "}
                            {"amidst the the conference itself."}
                        </p>
                    </div>
                    <div>
                        <img src={GYC1} />
                    </div>

                    <NextPage pageLink={"/projectOC"} pageLabel={"Next up: Clear communication through visuals"} />

                </div>


            </div>
        </div>
    );
};
import React from 'react';
import ProjectGYC from '../assets/ProjectGYC.png';
import GYC1 from '../assets/GYC1.png'
import { Header } from '../components/Header/Header';

export const ProjectPageGYC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectGYC} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"Osaka YMCA Global Youth Conference"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"digital, print media"}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"Hosted by Osaka YMCA, the Global Youth Conference aims to encourage cultural exchange and develop social awareness among young people from all over the world. The 4th edition explores themes of Mental Health and Articifical Intelligence, their roles and impact in our societies, various cultural responses, and practical resolutions we can make to approach these areas in our lives."}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={GYC1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
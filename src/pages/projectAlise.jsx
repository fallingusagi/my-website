import React from 'react';
import ProjectAlise from '../assets/ProjectAlise.png';
import Alise1 from '../assets/Alise1.png'
import { Header } from '../components/Header/Header';

export const ProjectPageAlise = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectAlise} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"alise"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"concept app"}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"alise is an acronym for A Little Intelligent Search Engine, which helps fashion-concious young people sieve through the overwhelming volume of apparel listings to find pieces tailored to their personal tastes. After all, shopping is meant to be fun!"}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={Alise1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
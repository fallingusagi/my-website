import React from 'react';
import ProjectOC from '../assets/ProjectOC.png';
import OC1 from '../assets/OC1.png'
import { Header } from '../components/Header/Header';

export const ProjectPageOC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectOC} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"One Community"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"digital, print media"}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"One Community is the youth community within Covenant Community Methodist Church, where I led a team creating design elements for various events and initiatives. Below are a few of the pieces I particularly like."}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={OC1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
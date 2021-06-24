import React from 'react';
import ProjectFR from '../assets/ProjectFR.png';
import FR1 from '../assets/FR1.png';
import { Header } from '../components/Header/Header';

export const ProjectPageFR = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectFR} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"Facilities Reporting Tool"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"mobile-optimised web app"}
                            </p>
                        </div>
                        <div className="flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"Things don't always work as they should in the workplace 🙁. But the way to getting them fixed should..."}
                            </p>
                            <p className="text-sm text-mytheme-ebony">
                                {"So we reimagined the process into three easy steps, and improved awareness and accessibility by pinpointing points of need, resulting in an increase in adoption of more than 100% after launch, and a prized"} <a href="https://sgmark.org/project-description/?id=258" className="font-medium text-mytheme-charcoal text-sm hover:underline">{"SG Mark 2021 Award"}</a> {"from Design Business Chamber Singapore (DBCS)."}
                            </p>

                        </div>
                    </div>
                    <div>
                        <img src={FR1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
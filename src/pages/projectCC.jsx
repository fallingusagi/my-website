import React from 'react';
import ProjectCC from '../assets/ProjectCC.png';
import CC1 from '../assets/CC1.png'
import { Header } from '../components/Header/Header';

export const ProjectPageCC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectCC} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"Client Connect"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"web responsive, desktop/tablet/mobile"}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"Client Connect is a one-stop internal tool that empowers DBS Bank Ltd’s Relationship Managers to better manage and serve their pool of 200+ clients. "}
                            </p>
                            <p className="text-sm text-mytheme-ebony">
                                {"Creating the system from scratch provided many opportunities to design data structures, interaction models, and contribute design elements for use by other teams."}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={CC1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
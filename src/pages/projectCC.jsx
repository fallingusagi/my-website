import React from 'react';
import ProjectCC from '../assets/ProjectCC.png';
import CC1 from '../assets/CC1.png'
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPageCC = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectCC} />

                    <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                        {"[Redacted] / web responsive, desktop + tablet + mobile for a bank."} </p>
                    <div className="space-y-4">
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                            {"Next-gen wealth management system"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"[Redacted] is a one-stop internal tool that empowers the bank's "}
                            {"Relationship Managers to better manage and serve their pool of 600+ clients."}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"I worked closely with research, product and development squads to see the project through from "}
                            {"conception to launch, iteratively improving along the way. Building the system from scratch "}
                            {"provided many opportunities to design data structures, interaction models, and contribute "}
                            {"design elements designed with scalability in mind for use by other teams across the bank."}
                        </p>

                        {/* <img src={CC1} /> */}
                    </div>

                    <NextPage pageLink={"/projectGYC"} pageLabel={"Next up: Global Youth Conference"} />

                </div>
            </div>
        </div>
    );
};
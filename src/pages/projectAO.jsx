import React from 'react';
import ProjectAO from '../assets/ProjectAO.png';
import AO1 from '../assets/AO1.png'
import { Header } from '../components/Header/Header';

export const ProjectPageAO = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={AO1} />
                </div>


            </div>
        </div>
    );
};
import React from 'react';
import ProjectPayLah from '../assets/ProjectPayLah.png';
import PayLah1 from '../assets/PayLah1.png'
import { Header } from '../components/Header/Header';

export const ProjectPagePayLah = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-16 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectPayLah} />
                    <div className="xs:flex-col sm:inline-flex xs:space-x-0 sm:space-x-8">
                        <div className="flex flex-col">
                            <p className="pr-2 font-medium text-mytheme-charcoal">
                                {"DBS PayLah!"}
                            </p>
                            <p className="text-sm text-mytheme-beigegray">
                                {"app, android/iOS"}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm text-mytheme-ebony">
                                {"DBS PayLah! is a mobile payment/wallet service offered by Singapore-based DBS Bank Ltd, the largest bank in SEA. The app allows users to get rides, order meals, book tickets and handle all kinds of everyday transactions including payment at over 180,000 acceptance points across Singapore. "}
                            </p>
                            <p className="text-sm text-mytheme-ebony">
                                {"In 2019, PayLah! was still primarily a cashless P2P & C2B app, and usage statistics revealed that most users used the app infrequently, for single transactions. And thus came the question: How might we increase user engagement on PayLah! ?"}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={PayLah1} />
                    </div>
                </div>


            </div>
        </div>
    );
};
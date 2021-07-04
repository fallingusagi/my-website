import React from 'react';
import ProjectPayLah from '../assets/ProjectPayLah.png';
import PayLah1 from '../assets/PayLah1.png';
import PayLah2 from '../assets/PayLah2.png';
import PayLah3 from '../assets/PayLah3.png';
import PayLah4 from '../assets/PayLah4.png';
import PayLah5 from '../assets/PayLah5.png';
import PayLahinterview from '../assets/PayLahinterview.png';
import PayLahcompetitors from '../assets/PayLahcompetitors.png';
import PayLahideation from '../assets/PayLahideation.png';
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPagePayLah = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectPayLah} />
                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                            {"PayLah! / android and iOS app for DBS Bank Ltd."}
                        </p>
                        <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                            {"How I helped a payments app go beyond just payments"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"DBS PayLah! is a mobile payment/wallet service offered by Singapore-based "}
                            {"DBS Bank Ltd, the largest bank in SEA. "}
                            {/* {"The app allows users to get rides, order meals, book tickets and handle all kinds of everyday transactions "}
                            {"including payment at over 180,000 acceptance points across Singapore."} */}
                        </p>
                    </div>
                    {/* Body */}
                    <div className="space-y-8">
                        {/* The prompt */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"The prompt"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"When I joined the team, cashless payments were still picking up in popularity. "}
                                {"Usage statistics revealed that only about a third of PayLah!'s users were active, "}
                                {"most users used the app infrequently, "}
                                {"and those that used it only used it to do one thing (pay friends, scan QR or for e-commerce). "}
                                {"And thus came the question: How might we increase user engagement on PayLah! ?"}
                            </p>
                        </div>

                        {/* The situation */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"What do people want that we aren't giving them?"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To find our more about our target customers' behaviours and what they wanted "}
                                {"from a payments app, I interviewed and surveyed a total of 54 milennials."}
                            </p>
                            <img src={PayLahinterview} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"As some patterns emerged (unfortunately I can't go into too much detail here for fear "}
                                {"of a potential lawsuit coming my way), we were able to form distinct personas and identify "}
                                {"the reasons we were losing them and where exactly they were dropping off in our current journey. "}
                                {"We also gained some insights into the motivations behind choice of payment mode, "}
                                {"which turned out to be closely related to rewards, and how each segment defined 'rewards'."}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"At the same time, I looked into our competitors' value propositions, business models, "}
                                {"and features offered. These included both direct/indirect and local/global "}
                                {"payment, deals, and rewards-based apps. "}
                            </p>
                            <img src={PayLahcompetitors} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Our primary concerns included evaluating our performance against other payments-based apps, "}
                                {"but also making the correct comparisons since we were expanding our market definitions. We were "}
                                {"currently in the business of payments, but we fully intended to be in the business of "}
                                {"rewards as well."}
                            </p>
                        </div>

                        {/* Ideation */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"How can we make PayLah! more rewarding?"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"I was given plenty of freedom to explore various concepts, and it was nice to let loose "}
                                {"and go a little crazy with some initial ideas. I went from conceptualising to refining "}
                                {"and iterating, first with wireframes and then hi-fi screens. I also fleshed out the user "}
                                {"journeys for several concepts and created interactive prototypes to demonstrate how they would work."}
                            </p>
                            <img src={PayLahideation} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Eventually I distilled these into 5 distinct concepts, each targeting a "}
                                {"specific problem identified in our earlier research. Again avoiding a lawsuit here "}
                                {"especially since some of these ideas are now being developed, but feel free to "}
                                {"reach out if you'd like to know more about any project :)"}
                            </p>
                            <img src={PayLah1} />
                            <img src={PayLah2} />
                            <img src={PayLah3} />
                            <img src={PayLah4} />
                            <img src={PayLah5} />
                        </div>
                        {/* Results */}
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                            {"Key results"}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 flex items-stretch">
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"Currently in development"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-beigepink">
                                    {"WIP"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs today"} </p>
                            </div>
                        </div>
                    </div>
                    <NextPage pageLink={"/projectAlise"} pageLabel={"Next project"}/>
                </div>
            </div>
        </div>
    );
};
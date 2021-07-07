import React from 'react';
import ProjectAlise from '../assets/ProjectAlise.png';
import Alise1 from '../assets/Alise1.png'
import UnhappyShopping from '../assets/illus_unhappyshopping.png';
import Alisetypes from '../assets/Alisetypes.png';
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPageAlise = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectAlise} />
                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                            {"alise is a concept app and my first foray into product design"}
                        </p>
                        <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                            {"How to combat the infinite scroll (and make shopping fun again)"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"Shop till you drop has a new meaning these days. Compared to physical tiredness, "}
                            {"our shopping fatigue is now more mental. Scrolling endlessly through online stores "}
                            {"yet unable to find what we are looking for - can't we do better?"}
                        </p>
                    </div>
                    {/* Body */}
                    <div className="space-y-8">
                        {/* Problem */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"What went wrong?"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Shopping is supposed to be fun! Yet somehow those magical moments, when all the stars align and we find something "}
                                {"that we fall absolutely in love with, comes much less often than one would hope. "}
                                {"In fact, many shopping expeditions (either online or offline) probably look more like this..."}
                            </p>
                            <img src={UnhappyShopping} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Somehow, the surge in options now available to us through increased accessibility to "}
                                {"apparel stores and aggregators worldwide has done little to help us find exactly what "}
                                {"we're looking for. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Curious to find out more, we dove into the data - any sales or consumer trends we could "}
                                {"get our hands on, for starters. We also grabbed a couple of our shopaholic friends "}
                                {"to understand their shopping behaviours, motivations, and expectations."}
                            </p>
                            <img src={Alisetypes} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"There were two main types of shoppers: Those that knew exactly what they wanted "}
                                {"and those who didn't. The former were often specific to a granular level of detail, "}
                                {"and were well-acquainted with fashion terminology. Accordingly, it was this same group "}
                                {"that experienced more shopping frustration, and that was expected to grow in size "}
                                {"as (young people especially) sought avenues to personalise and make unique all areas of "}
                                {"their lives."}
                            </p>
                        </div>
                        {/* ???Section */}
                    <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"WIP - Watch this space!"}
                            </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"Writing in progress..."}
                        </p>
                    </div>
                        {/* Alise */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"A better shopping experience"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"alise is an acronym for A Little Intelligent Search Engine, which helps fashion-concious young people sieve through the overwhelming volume of apparel listings to find pieces tailored to their personal tastes. After all, shopping is meant to be fun!"}
                            </p>
                            <img src={Alise1} />
                        </div>
                    </div>
                    
                    <NextPage pageLink={"/projectPayLah"} pageLabel={"Next up: More than a payments app"}/>

                </div>


            </div>
        </div>
    );
};
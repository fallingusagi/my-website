import React from 'react';
import ProjectAlise from '../assets/ProjectAlise.png';
import Alise1 from '../assets/Alise1.png'
import UnhappyShopping from '../assets/illus_unhappyshopping.png';
import Aliseinterviews from '../assets/Aliseinterviews.png';
import Alisetypes from '../assets/Alisetypes.png';
import Alisejourney from '../assets/Alisejourney.png';
import Alisezalora from '../assets/Alisezalora.png';
import Aliseideation from '../assets/Aliseideation.png';
import Alisetest from '../assets/Alisetest.png';
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
                            {"Okay, maybe that was a bit of an exaggeration."}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"We're not trying to kill the infinite scroll, "}
                            {"we just want to help people scroll a bit less... like, not infinitely 😀."}
                        </p>
                    </div>
                    {/* The problem */}
                    {/* <div className="space-y-4">
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                            {"The problem"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"Shop till you drop has a new meaning these days. Compared to physical tiredness, "}
                            {"our shopping fatigue is now more mental. Scrolling endlessly through online stores "}
                            {"yet unable to find what we are looking for - surely we can do better."}
                        </p>
                    </div> */}
                    {/* Body */}
                    <div className="space-y-8">
                        {/* What went wrong */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Deep diving into the shopping journey"}
                            </p>
                            <div className="">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Shopping is supposed to be fun! Yet somehow those magical moments, when all the stars align and we find something "}
                                    {"that we fall absolutely in love with, comes much less often than one would hope. "}
                                    {"And in reality, many shopping expeditions probably look more like this..."}
                                </p>
                            </div>
                            <img src={UnhappyShopping} />
                            {/* <p className="font-medium text-sm sm:text-base md:text-lg text-mytheme-charcoal">
                                {"In short, people have a really hard time finding stuff they like."}
                            </p> */}
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Somehow, the surge in options available to us with access to "}
                                {"apparel stores and aggregators worldwide in this era has done little to help us find exactly what "}
                                {"we're looking for. Curious to find out more, we delved into the data - any sales or consumer trends we could "}
                                {"get our hands on, and grabbed a couple of our shopaholic friends "}
                                {"to understand their shopping behaviours, motivations, and expectations."}
                            </p>
                            <img src={Aliseinterviews} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We conducted in-depth interviews with a total of 9 male and female friends, "}
                                {"first to observe their shopping routines, and then to ask about their satisfaction "}
                                {"levels with existing online shopping platforms, and any difficulties faced while using them. "}
                                {"Here's what we found..."}
                            </p>


                        </div>
                        {/* Two types of users */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Two types of users"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"As it turned out, shoppers could be categorised on a high-level basis into two main groups - "}
                                {"those who knew what they wanted, and those who didn't."}
                            </p>
                            <img src={Alisetypes} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"The former group had at least 2 search criteria (e.g. 'Red', 'Dress'), but were often specific to a much more granular level, "}
                                {"and were well-acquainted with fashion terminology. Accordingly, it was this same group "}
                                {"that experienced more shopping frustration, and this group was expected to grow in size "}
                                {"as (young people especially) sought avenues to personalise and make unique all areas of "}
                                {"their lives."}
                            </p>
                        </div>
                        {/* Only 1 type of search/filter */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Only one model of searching/filtering"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"One model for two types of users? Sounded suspect already... yet shopping platforms only ever "}
                                {"seemed to offer one way of finding items. It was formulaic: A standard text-based query search, "}
                                {"a basic set of text-based filters, and of course, the infinite scroll to display the results."}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"As a result the typical shopping journey looked a bit like this:"}
                            </p>
                            <img src={Alisejourney} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"And this journey was broken at two points."}
                            </p>

                            <div className="pl-4 space-y-2">
                                <p className="font-medium text-sm sm:text-base md:text-lg text-mytheme-charcoal">
                                    {"1. Insufficient filter options"}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"If the initial search results didn't match up to what they had in mind, shoppers "}
                                    {"would typically turn to the filters (Step 2 above) to narrow down the results list. However, "}
                                    {"there isn't always 'a filter for that'."}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"For example, one of the more petite interviewees mentioned she often had trouble "}
                                    {"finding dresses of suitable length."}
                                </p>
                                <p className="p-4 rounded-lg bg-mytheme-shell italic font-medium text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                    {"'Altering it is generally quite annoying for such "}
                                    {"a small change but sometimes there's no choice.' "}
                                </p>
                            </div>

                            <div className="pl-4 space-y-2">
                                <p className="font-medium text-sm sm:text-base md:text-lg text-mytheme-charcoal">
                                    {"2. The frustration-inducing, never-ending gamble"}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Once a shopper narrowed down the search results best they could with the given filters, "}
                                    {"they were faced with what is essentially a gamble (Step 3 above) at the bottom of each page. "}
                                    {"'Will I find something I like if I scroll for more?' 'Is it worth it?'"}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Eventually, as the frustration and fatigue builds up, shoppers stop wanting "}
                                    {"to make that gamble. And so while the infinite scroll may work for casual browsers, "}
                                    {"it can also be infinitely tiring for those looking for something specific."}
                                </p>
                                <p className="p-4 rounded-lg bg-mytheme-shell italic font-medium text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                    {"'I was quite frustrated last time when i was searching for something to wear for my birthday. "}
                                    {"I ended up buying 2-4 tops so I could cut off the choker from one of the tops and match it "}
                                    {"with this tube top that i liked but i feel like is lacking.'"}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"It certainly doesn't help when shoppers find an almost-perfect piece, and then "}
                                    {"because of a lack tools, need to start looking all over from scratch again."}
                                </p>
                                <p className="p-4 rounded-lg bg-mytheme-shell italic font-medium text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                    {"'[My colleague] would show me a very nice piece of clothing "}
                                    {"but I didn’t particularly like something about it, like the sleeves. Like I would want it to be sleeveless "}
                                    {"and my colleague will endeavour to try to find that, but usually not to great success."}
                                </p>
                            </div>



                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Special mention: Here I do have to give some credit to Zalora, an online fashion brand aggregator which "}
                                {"did have this 'Similar items' section below the listing currently being viewed "}
                                {"(in addition to one of the most comprehensive set of filters that we saw). "}
                            </p>
                            <img src={Alisezalora} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Now if only the section wasn't so blatantly biased towards pushing listings from its own in-house labels, "}
                                {"or if the items suggested looked even remotely similar to the above listing, this section would probably have "}
                                {"been pretty useful. At least it seems like they've got the right idea."}
                            </p>
                        </div>

                        {/* Alise */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"A better way to filter"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Having pinpointed the issues in the current shopping journey, we armed ourselves "}
                                {"with the knowledge we'd gained so far, a couple of markers, and a stack of paper "}
                                {"and started to explore the possibilities."}
                            </p>
                            <img src={Aliseideation} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Then, we consolidated the ideas and refined what we had through rounds of user testing, "}
                                {"including some A/B tests specifically on the customisation functions that would "}
                                {"form the core of our concept."}
                            </p>
                            <img src={Alisetest} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"And now..."}
                            </p>
                        </div>
                        {/* Alise */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Meet alise."}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"That's an acronym for A Little Intelligent Search Engine, "}
                                {"our highly-customisable image-based search application. "}
                            </p>
                            <img src={Alise1} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Users can snap pictures of items they like, and use the app's image-recognition capabilities "}
                                {"to select all or certain parts to upload. They can re-size, re-colour, re-pattern, and essentially "}
                                {"snip and stitch to their heart's content to fashion their unique ideal piece of clothing. "} 
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Then, the app can pull together images from the web and present results sorted by a similarity index."}
                            </p>
                            
                        </div>
                    </div>

                    <NextPage pageLink={"/projectPayments"} pageLabel={"Next up: More than a payments app"} />

                </div>


            </div>
        </div>
    );
};
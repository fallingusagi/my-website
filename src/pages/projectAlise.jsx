import React from 'react';
import ProjectAlise from '../assets/ProjectAlise.png';
import Alise1 from '../assets/Alise1.png'
import UnhappyShopping from '../assets/illus_unhappyshopping.png';
import Aliseinterviews from '../assets/Aliseinterviews.png';
import Alisetypes from '../assets/Alisetypes.png';
import Alisejourney from '../assets/Alisejourney.png';
import Alisezalora from '../assets/Alisezalora.png';
import Aliseideation from '../assets/Aliseideation.png';
import Aliseinspiration from '../assets/Aliseinspiration.png';
import Alisetest from '../assets/Alisetest.png';
import Alise2 from '../assets/Alise2.png';
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
                                {"How did we get here again?"}
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
                                {"we're looking for."}
                            </p>
                        </div>

                        {/* Researching */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Understanding the problem"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Curious to find out more, we dove headfirst into any sales or consumer data we could "}
                                {"get our hands on. We also grabbed a couple of our shopaholic friends "}
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
                                {"From our research, shoppers could be categorised on a high-level basis into two main groups - "}
                                {"those who knew what they wanted, and those who didn't."}
                            </p>
                            <img src={Alisetypes} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"The former group had at least 2 search criteria (e.g. 'Red', 'Dress'), but often had up to 6 or 7, "}
                                {"and were well-acquainted with fashion terminology. It follows that this same group "}
                                {"experienced more shopping frustration, and this group was expected to grow in size "}
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
                                {"While literal brick-and-mortar stores evolved into glass-and-concrete stores, which then "}
                                {"gave way to online ones, the actual shopping user journey remain largely untouched by the passage of time. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Online retailers offered a single formulaic approach: A standard text-based query search, "}
                                {"a basic set of text-based filters, and of course, the infinite scroll to display the results."}
                                {/* {"They were adopting the approach of physical stores, but in doing so (perhaps inadvertently) also "}
                                {"adopted one crucial limitation: There could only be 1 main sorting criteria at a time."} */}
                            </p>
                            {/* <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To illustrate, a store could display items based a single criteria such as colour or style. "}
                                {"They could also arrange items by a second criteria within the first criteria, but "}
                                {"could not arrange primarily by two different criteria at once."} 
                            </p> */}
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"But does this one model really cater to the two types of users we discovered? "}
                                {"Let's examine the online shopping journey, which typically looks a bit like this:"}
                            </p>
                            <img src={Alisejourney} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"While observing shoppers, we pinpointed two issues causing this journey to break."}
                            </p>

                            <div className="px-4 space-y-2">
                                <p className="font-medium text-sm sm:text-base md:text-lg text-mytheme-charcoal">
                                    {"1. Insufficient filter options"}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"If the initial search results didn't match up to what they had in mind, shoppers "}
                                    {"would typically turn to the filters (Step 2 above) to narrow down the results list. However, "}
                                    {"there isn't always a filter for that."}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"For example, one of the more petite interviewees had this to say: "}
                                </p>
                                <div className="p-4">
                                    <p className="rounded-lg italic font-medium font-serif text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"'I think for me because I’m quite short, "}
                                        {"I always have to look at the length of the dresses when I am buying them. "}
                                        {"Altering them is generally quite annoying for such "}
                                        {"a small change but sometimes there's no choice as I just can't find suitable ones' "}
                                    </p>
                                    <p className="italic font-light text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"- Interviewee 3"}
                                    </p>
                                </div>
                            </div>

                            <div className="px-4 space-y-2">
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
                                    {"it can also be infinitely tiring for those looking for something specific. "}
                                    {"One of our interviewees often took it upon themself to create the ideal item: "}
                                </p>
                                <div className="p-4">
                                    <p className="rounded-lg italic font-medium font-serif text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"'I was quite frustrated last time when I was searching for something to wear for my birthday. "}
                                        {"I ended up buying 2-4 tops so I could cut off the choker from one of the tops and match it "}
                                        {"with this tube top that I liked but I felt was lacking.'"}
                                    </p>
                                    <p className="italic font-light text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"- Interviewee 6"}
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"It certainly doesn't help when shoppers find an almost-perfect piece, and then "}
                                    {"because of a lack tools, need to start looking all over from scratch again."}
                                </p>
                                <div className="p-4">
                                    <p className="rounded-lg italic font-medium font-serif text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"'[My colleague] would show me a very nice piece of clothing "}
                                        {"but I didn’t particularly like something about it, like the sleeves. Like I would want it to be sleeveless "}
                                        {"and my colleague will endeavour to try to find that, but usually not to great success."}
                                    </p>
                                    <p className="italic font-light text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                        {"- Interviewee 1"}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Alise */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"A better way to filter"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Having pinpointed the issues in the current shopping journey, we hunkered down "}
                                {"with a couple of markers, a stack of paper, and plenty of coffee, "}
                                {"and started to explore the possibilities."}
                            </p>
                            <img src={Aliseideation} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"When we consolidated our ideas, we found that several were based around "}
                                {"the nature of humans as visual creatures. Indeed, we had observed earlier "}
                                {"that although people sometimes had difficulty articulating what they wanted, "}
                                {"they could identify what they liked and what they didn't immediately upon seeing it. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Relating this back to the physical shopping experience, when we find something we "}
                                {"kind of like, we remember it, and we look around (in the store, or in another one) to "}
                                {"find something similar. We've effectively got ourselves a visual anchor. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"But with the online shopping journey feeding us with way more products per second, "}
                                {"we get bombarded with a visual information overload instead, making it harder to find "}
                                {"what we're looking for, and much more tiring."}
                            </p>
                        </div>
                        {/* Visual journey */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"So we asked ourselves, 'What if we brought back the visual aspect of the shopper's journey?'"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We entered our second round of ideation and conceptualisation, fleshing out potential "}
                                {"features and improved journeys."}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We also took inspiration for interactions and editing functions from various apps "}
                                {"like Pinterest, Apple Notes, Telegram and Photoshop to name a few. "}
                                {"As we drafted the designs, our concept also got clearer."}
                            </p>
                            <img src={Aliseinspiration} />
                            {/* Special mention */}
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Among the retailers, I'd like to shoutout to Zalora, an online fashion brand aggregator which "}
                                {"had a 'Similar items' section below the listing currently being viewed "}
                                {"(in addition to one of the most comprehensive set of filters that we saw). "}
                            </p>
                            <img src={Alisezalora} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Alas, the section seemed to mainly push listings from its own in-house labels, "}
                                {"and the items suggested didn't look even remotely similar to the above listing. "}
                                {"Nevertheless this was a cool concept that was in sync with our findings. "}
                            </p>
                            
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"After the brainstorming, we consolidated our ideas and refined what we had through rounds of user testing, "}
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
                                {"That's A Little Intelligent Search Engine for you, "}
                                {"which is our highly-customisable image-based search application. "}
                            </p>
                            <img src={Alise1} />
                            {/* <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Users can snap pictures of items they like, and use the app's image-recognition capabilities "}
                                {"to select all or certain parts to upload. They can re-size, re-colour, re-pattern, and essentially "}
                                {"snip and stitch to their heart's content to fashion their unique ideal piece of clothing. "}
                            </p> */}
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Here's how it works:"}
                            </p>
                            <ul className="list-inside list-decimal text-xs sm:text-sm md:text-base text-mytheme-ebony">
                                <li>{"User gets stuck scrolling infinitely (frustrating!!)"} </li>
                                <li>{"She finds something she likes... too bad it only comes with puffy sleeves"} </li>
                                <li>{"User takes a screenshot and uploads it to Alise"} </li>
                                <li>{"Through the power of image recognition, Alsie generates a matching search template"} </li>
                                <li>{"The user can then adjust the template, replacing the puffy sleeves with tapered ones"} </li>
                                <li>{"Alise will then perform a search for the adjusted template, displaying results by similarity"} </li>
                                <li>{"User finds that pretty dress, this time with the sleeves she likes (Hooray)"} </li>
                                </ul>
                                                            
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"With the introduction of an enhanced clothing template, users can adjust "}
                                {"the template to a granular level of detail by tweaking the individual components "}
                                {"of the piece of clothing. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Patterns, colours, dimensions... if you can see it, you can change it. "}
                                {"The possibilites are near limitless. (Or should I say, infinite 😜)"}
                            </p>
                            <img src={Alise2} />

                        </div>
                    </div>

                    <NextPage pageLink={"/projectPayments"} pageLabel={"Next up: More than a payments app"} />

                </div>


            </div>
        </div>
    );
};
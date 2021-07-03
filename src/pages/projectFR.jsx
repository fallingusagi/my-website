import React from 'react';
import ProjectFR from '../assets/ProjectFR.png';
import FR1 from '../assets/FR1.png';
import FR2 from '../assets/FR2.png';
import FR4 from '../assets/FR4.png';
import FRpietree from '../assets/FR pie tree.png';
import FRcardsort from '../assets/FR card sort.jpg';
import FRcrazydropdowns from '../assets/FR crazy dropdowns.png';
import FRjourneymap from '../assets/FR journey map.jpg';
import { Header } from '../components/Header/Header';

export const ProjectPageFR = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectFR} />

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                            {"Facilities Reporting Tool / mobile-optimised web app for DBS Bank Ltd."}
                        </p>
                        <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                            {"Things don't always work as they should in the workplace... But the way to getting them fixed should!"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"And thus began our journey to reimagine DBS' existing process that got us an adoption increase of over 100% and a "}
                            <a href="https://sgmark.org/project-description/?id=258" className="font-medium text-mytheme-charcoal text-sm sm:text-base md:text-lg hover:underline">
                                {"SG Mark 2021 Award"}</a>
                            {" from Design Business Chamber Singapore (DBCS) to boot!"}
                        </p>
                    </div>

                    {/* Body */}
                    <div className="space-y-8">
                        {/* The situation */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"The situation"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"When we first got to work on this project, faults reported through hotline calls "}
                                {"far exceeded form submissions. Top users were mainly Personal Assistants or Admin staff "}
                                {"who consolidated requests from others as part of their daily tasks. "}
                                {"Project stakeholders felt the tool was under-utilised, "}
                                {"and with some initial research, we quickly found out why. "}
                            </p>
                            <ul className="max-w-max space-y-0 list-decimal list-inside">
                                <div className="space-y-0">
                                    <li className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                        {"Users couldn't find the right category"}
                                    </li>
                                    {/* <div className="pl-5">
                                        <p className="text-xs sm:text-sm text-mytheme-ebony">
                                            {"4 out of 5 users had trouble searching for the right category. "}
                                            {"31% of the raised requests were made in the wrong sub-category, "}
                                            {"resulting in service delays. "}</p>
                                    </div> */}
                                </div>
                                <div className="space-y-0">
                                    <li className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                        {"The form was veeery lengthy"}
                                    </li>
                                    {/* <div className="pl-5">
                                        <p className="text-xs sm:text-sm  text-mytheme-ebony">
                                            {"The average form completion time was 9 minutes. "}</p>
                                    </div> */}
                                </div>
                                <div className="space-y-0">
                                    <li className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                        {"Users couldn't track their existing requests"}
                                    </li>
                                    {/* <div className="pl-5">
                                        <p className="text-xs sm:text-sm  text-mytheme-ebony">
                                            {"Post-submission there were no clear next steps, and all users we observed "}
                                            {"weren't aware there was a webpage where they could check their request status."}</p>
                                    </div> */}
                                </div>
                            </ul>
                        </div>
                        {/* Re-categorising the categories */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Re-categorising the categories"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"While observing a couple of people using the system, we realised there might be a mental model mismatch. "}
                                {"Though users tended to focus on the problem that needed to be solved, the categories presented to them "}
                                {"were a mix of object types, locations, and solutions (e.g. plumbing). In addition, there were over "}
                                {"170 sub-categories in total."}</p>
                            <img src={FRcardsort} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Our first course of action was to simplify the list and then do a simple card sort, "}
                                {"wanting to see how users might intuitively group the sub-categories. "}
                                {"Most behaved as expected, grouping primarily by object classifications."}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Then, using several common scenarios, we tested this hypothesis with "}
                                {"some users, where there were two paths (one location-based, one object-based) "}
                                {"Interestingly, users didn't always pick the object-first path."}</p>
                            <img src={FRpietree} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Upon closer examination, we confirmed with users that there "}
                                {"was a caveat to our earlier hypothesis. Users preferred an object-first approach "}
                                {"when they could articulate the problem and it directly affected themselves (like the light above their workspace), "}
                                {"but had no significant preference in shared spaces or when the exact cause of the issue was unknown (like the toilets or cafeteria)."}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Overall, we kept the object-first approach but also made it easier for users to report "}
                                {"location-specific issues with handy QR codes in common areas. "}</p>
                        </div>
                        {/* Streamlining the form */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Streamlining the form"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To tackle the second issue, we did a comprehensive review of the existing form "}
                                {"which had a lot of unecessary fields and was difficult to navigate (it had some really crazy dropdowns too)"}</p>
                            <img src={FRcrazydropdowns} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We worked out the back-end logic with our dev squad to help the system autopopulate "}
                                {"employee and location information to reduce the number of fields required. "}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We also split up the steps to make it easy for users to tell us the What "}
                                {"and the Where of the problem, as well as How to contact them, and ended up with 3 simple steps. "}</p>
                            <img src={FR2} />
                        </div>
                        {/* Timelier (and more accessible) updates */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Closing the loop"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Lastly, we wanted to improve the post-submission portion of the journey. "}
                                {"So we tagged along with some of the staff who went from site to site and actually did the fixing "}
                                {"to understand the people involved and actions taken behind the scenes, from recieving a request to fulfilling it."}</p>
                            <img src={FRjourneymap} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"With this, we identified key points in the journey where the system could feasibly be alerted, "}
                                {"and sought to reflect this progress back to the requestor, in the same page where they "}
                                {"submitted the request for easy tracking."}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"For some final touches, we designed some quick gratitude prompts into the feedback collection "}
                                {"to encourage colleagues to remember to appreciate each other's work! With the increased visibilty "}
                                {"of our solution, we hoped that users would also be more understanding and appreciative of the effort "}
                                {"that goes into fixing workplace problems."}</p>
                            <img src={FR4} />
                        </div>
                        {/* Results */}
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Key results"}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 flex items-stretch">
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Faster process"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                                    {"~1.5 min"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs 9 min today"} </p>
                            </div>
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Higher adoption"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                                    {"+100%"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs today"} </p>
                            </div>
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"Less problematic requests"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-beigepink">
                                    {"Coming soon"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs 31% today"} </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
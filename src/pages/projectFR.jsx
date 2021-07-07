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
import { NextPage } from '../components/NextPage/NextPage';

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
                            {"Things don't always work in the workplace... But the way to getting them fixed should!"}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"And thus began our journey to reimagine DBS' existing process that got us an adoption increase of over 100% and a "}
                            <a href="https://sgmark.org/project-description/?id=258" className="font-medium underline text-mytheme-charcoal text-sm sm:text-base md:text-lg hover:underline">
                                {"SG Mark 2021 Award"}</a>
                            {" from Design Business Chamber Singapore (DBCS) to boot!"}
                        </p>
                    </div>

                    {/* Body */}
                    <div className="space-y-8">
                        {/* Background */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Background"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To address the high manpower costs associated with maintaining a hotline, "}
                                {"DBS decided to invest in an online platform to gather complaints and effectively "}
                                {"automate this process, and so the Facilities Reporting Tool was born."}
                            </p>
                        </div>
                        {/* The situation */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"The situation"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"When we came along, only a handful of users were using the online platform. "}
                                {"The majority still preferred voicing their displeasures over the hotline, "}
                                {"and the company was bleeding money maintaining both. "}
                                {"The only users who seemed to use the platform regularly were Personal Assistants or Admin staff "}
                                {"who had been delegated the task as part of their job scope, and had no choice but to comply. "}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Project stakeholders wanted to understand why the tool was so under-utilised, "}
                                {"and with some initial research, we quickly found out why. "}
                            </p>
                            <ul className="max-w-max space-y-0 list-decimal list-inside">
                                <div className="space-y-0">
                                    <li className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                        {"Way too many categories to choose from"}
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
                                        {"No easy way to track requests"}
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
                                {"Simplifying decisions for the user"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"The fact that 4 out of 5 users had difficulty finding the right category to report a fault "}
                                {"was actually not surprising when we found out there were over 170 sub-categories in total. "}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Through our observation, we noticed there might also be a mental model mismatch issue. "}
                                {"Though users tended to focus on the problem that needed to be solved, the categories presented to them "}
                                {"were a mix of object types, locations, and solutions "}
                                {"(e.g. a user might be thinking of 'leak', 'spill' or 'mess' but they needed to find and select 'mop'). "}</p>
                            <img src={FRcardsort} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Our first course of action was to simplify the list and then invite some users to join us in a card sorting exercise, "}
                                {"wanting to see how users might intuitively group the sub-categories. "}
                                {"Most behaved as expected, grouping primarily by object types. So it seemed "}
                                {"we could reduce the burden on users by restructuring the category choices based primarily on object types, "}
                                {"instead of forcing users to think of the solutions they needed. It made sense - "}
                                {"users describe the problem, the system prescribes the solution."}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To test our hypothesis, we presented users with several common scenarios "}
                                {"describing a problem, where there were two paths (one object-first and one location-first) "}
                                {"Interestingly, users didn't always pick the object-first path."}</p>
                            {/* <img src={FRpietree} /> */}
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Upon closer examination, we saw there was a caveat to our earlier hypothesis. Users preferred an object-first approach "}
                                {"when they could articulate the problem and it directly affected themselves (like the light above their workspace), "}
                                {"but had no significant preference in shared spaces or when the exact cause of the issue was unknown (like the toilets or cafeteria)."}</p>
                            <img src={FRpietree} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Hence, we decided to keep the object-first approach but also made it easier for users to report "}
                                {"location-specific issues with handy QR codes in common areas and points of need. "}
                                {"The QR-code locations and placement were decided through another user survey, and we were "}
                                {"able to pre-populate specific location information when the codes were scanned, so although "}
                                {"users still had to describe the problem faced, they could already see their location displayed, "}
                                {"and had less fields to fill."}</p>
                        </div>
                        {/* Reducing user input required */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Reducing user input required"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"To tackle the second issue of the lengthy form, we did a comprehensive review of the existing form "}
                                {"which took users 9 minutes on average to get through. No doubt this was in part due to the "}
                                {"category confusion from earlier, but the form also had a lot of unecessary fields and "}
                                {"was difficult to navigate (it had some really crazy dropdowns too)"}</p>
                            <img src={FRcrazydropdowns} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"We worked out the back-end logic with our dev squad to help the system auto-populate "}
                                {"readily available information from internal databases, including employee and "}
                                {"default location information to reduce the effort required from the user. "}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Based on our earlier finding, we also split up the form into steps to make the process "}
                                {"more conversational and reflect the users' mental model, starting with the What (object-first) "}
                                {"and the Where of the problem, then How to contact them, and ended up with 3 simple steps. "}</p>
                            <img src={FR2} />
                        </div>
                        {/* Timelier (and more accessible) updates */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                                {"Closing the loop"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Lastly, we wanted to improve the post-submission portion of the journey by addressing the "}
                                {"'What happens now...?' bewilderment users felt after successfully making a request (in the event they actually did get through the form). "}
                                {"We began by tagging along with some of the staff who went from site to site to fix faults "}
                                {"to understand the people involved and actions taken behind the scenes, from recieving a request to fulfilling it."}</p>
                            <img src={FRjourneymap} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"With this, we identified key points in the journey that could feasibly be tracked, "}
                                {"and sought to reflect this progress back to the requestor, in the same page where they "}
                                {"submitted the request for easy access."}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Overall, we were sure we had made substantial improvements to smoothen the user journey. But we wanted to "}
                                {"take it a step further for a more empathetic and delightful experience. "}</p>
                            <img src={FR4} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"For some final touches, we designed some quick gratitude prompts into the feedback collection "}
                                {"to encourage colleagues to remember to appreciate each other's work. "}
                                {"With the increased visibility of our solution, we hoped that users would also be more understanding and appreciative of the effort "}
                                {"that others put in to fix their problems - it's always better when we work together!"}</p>
                        </div>
                        {/* Results */}
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-mytheme-charcoal">
                            {"Key results"}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 flex items-stretch">
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Faster form completion"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                                    {"6x faster"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"1.5 min vs 9 min today"} </p>
                            </div>
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Higher adoption"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                                    {"2x users"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs today"} </p>
                            </div>
                            <div className="flex-col">
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"Less problematic requests"}</p>
                                <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-beigepink">
                                    {"WIP"}</p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-beigepink">
                                    {"vs 31% today"} </p>
                            </div>
                        </div>
                    </div>
                    <NextPage pageLink={"/projectAlise"} pageLabel={"Next up: Save the shopping experience!"}/>
                </div>
            </div>
        </div>

    );
};
import React from 'react';
import ProjectPayments from '../assets/ProjectPayments.png';
import Payments1 from '../assets/Payments1.png';
import Payments2 from '../assets/Payments2.png';
import Payments3 from '../assets/Payments3.png';
import Payments4 from '../assets/Payments4.png';
import Payments5 from '../assets/Payments5.png';
import Paymentsinterview from '../assets/Paymentsinterview.png';
import Paymentscompetitors from '../assets/Paymentscompetitors.png';
import Paymentsideation from '../assets/Paymentsideation.png';
import { Header } from '../components/Header/Header';
import { NextPage } from '../components/NextPage/NextPage';

export const ProjectPagePayments = () => {
    return (
        <div className="bg-mytheme-sand w-screen...">
            <Header level={"L2"} />

            <div className="px-12 sm:px-24 md:px-32 lg:px-48 xl:px-56 2xl:px-64 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

                <div className="grid grid-cols-1 space-y-8 place-self-center w-full...">
                    <div className="h-1 w-full"></div>
                    <img src={ProjectPayments} />
                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm md:text-base font-light text-mytheme-beigepink">
                            {"[Redacted] / android and iOS Payments app"}
                        </p>
                        <p className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-mytheme-charcoal">
                            {"How I helped a payments app go beyond just payments"}
                        </p>
                        <p className="p-4 rounded-lg bg-yellow-100 bg-opacity-50 text-xs sm:text-sm md:text-base text-gray-500">
                            {"⚠️ Some information can't be shared if I'm to avoid a lawsuit - so please bear with me, "}
                            {"and feel free to reach out if you'd like to know more! "}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                            {"[Redacted] is a mobile payment/wallet service offered by an international bank "}
                            {"based largely in Southeast Asia."}
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
                                {"When I joined the team, cashless payments were still picking up in popularity in the region. "}
                                {"Usage statistics revealed that only about a third of the app's users were active, "}
                                {"most users used the app infrequently, "}
                                {"and those that used it only used it to do one thing (pay friends, scan QR or for e-commerce). "}
                                {"And thus came the question: How might we increase user engagement on [Redacted] ?"}
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
                            <img src={Paymentsinterview} />
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
                            <img src={Paymentscompetitors} />
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
                                {"How can we make the Payments app more rewarding?"}</p>
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"I was given plenty of freedom to explore various concepts, and it was nice to let loose "}
                                {"and go a little crazy with some initial ideas. I went from conceptualising to refining "}
                                {"and iterating, first with wireframes and then hi-fi screens. I also fleshed out the user "}
                                {"journeys for several concepts and created interactive prototypes to demonstrate how they would work."}
                            </p>
                            <img src={Paymentsideation} />
                            <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                {"Eventually I distilled these into 5 distinct concepts, each targeting a "}
                                {"specific problem identified in our earlier research. Again I can't go into too much detail here "}
                                {"as these ideas are now being developed, but feel free to "}
                                {"reach out if you'd like to know more about these, or any project :)"}
                            </p>
                            <ul className="list-inside list-decimal space-y-6">
                                <li className="font-medium text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Campaign Dashboard"}</li>
                                <img src={Payments1} />
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"For many people, loyalty cards are a staple in their physical wallets. "}
                                    {"Thus, mobile wallets should naturally be able to store digital loyalty cards, track their progress, and "}
                                    {"handle redemptions. When payments are made through the mobile wallet, progress can seamlessly be recorded on loyalty cards "}
                                    {", opening up many opportunities for cross-marketing with partner marchants, "}
                                    {"benefiting both merchants and the bank itself"}
                                </p>
                                <li className="font-medium text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Brand Bonsai"}</li>
                                <img src={Payments2} />
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"On the topic of loyalty, I thought the app itself could benefit from some "}
                                    {"loyalty-based reward system to encourage regular and more frequent usage. "}
                                    {"I imagined this in the form of a gamified redemption of vouchers for the user's "}
                                    {"brand of choice."}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Now we had also found that people tended to be quite loyal to their favourite brands. "}
                                    {"So to add another layer of fun, we could expand the game to be a platform-wide "}
                                    {"competition where instead of a pre-determined prize, vouchers for the most popular brand "}
                                    {"at the end of the week would be distributed to all participants. This way, users would be "}
                                    {"competing with other users to show their support and get rewards from their favourite labels. "}
                                </p>
                                <li className="font-medium text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Deals, with Pals"}</li>
                                <img src={Payments3} />
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"This concept was built around the social nature of humans, and specifically, "}
                                    {"how we like to know what other humans (like our friends) are doing. "}
                                    {"Ever ask your friends for a good food place recommendation? Or about where you could "}
                                    {"get a good movie deal? We found that topics like these arose frequently in our users' conversations. "}
                                    {"Then, what if we created a feature to highlight our friends' activity and allow us to "}
                                    {"get suggestions from our friends in a more seamless and timely fashion?"}
                                </p>
                                <li className="font-medium text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Pin it!"}</li>
                                <img src={Payments4} />
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"If we can follow our friends' activity, then why not also our favourite brands? "}
                                    {"We found that some users had trouble keeping tabs on all their frequented brands, "}
                                    {"and sometimes ended up missing good promotions. To make users' lives easier and "}
                                    {"reduce the missed opportunities to use the platform, we could allow users to 'subscribe' "}
                                    {"specifically to certain brands and receive updates from them. "}
                                </p>
                                <li className="font-medium text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Discover Deals"}</li>
                                <img src={Payments5} />
                                <p className="text-sm sm:text-base md:text-lg text-mytheme-ebony">
                                    {"Not everyone knows what they want 100% of the time. And with the platform "}
                                    {"quickly expanding, we needed a better way for users to browse through the deals we "}
                                    {"were offering. I devised an easily-scrollable format, plus a friendly filtering "}
                                    {"journey to guide users through finding deals that would interest them. "}
                                </p>
                            </ul>
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
                    <NextPage pageLink={"/projectCC"} pageLabel={"Next up: Next-gen wealth management"} />
                </div>
            </div>
        </div>
    );
};
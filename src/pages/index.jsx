//Frameworks
import React, { useState } from 'react';

//Assets
import IllusHello from '../assets/illus_hello.svg';
import IllusHelloSad from '../assets/illus_hellosad.svg';
import ProjectCC from '../assets/ProjectCC.png';
import ProjectPayLah from '../assets/ProjectPayLah.png';
import ProjectAlise from '../assets/ProjectAlise.png';
import ProjectFR from '../assets/ProjectFR.png';
import ProjectOC from '../assets/ProjectOC.png';
import ProjectGYC from '../assets/ProjectGYC.png';
import ProjectAO from '../assets/ProjectAO.png';

//Files
import { ClickableDonut } from '../components/ClickableDonut';
import { Header } from '../components/Header/Header';
import { Card } from '../components/Card/Card';


export const Main = () => {
  const [helloFace, setHelloFace] = useState(IllusHello)
  const burstCallBack = () => setHelloFace(IllusHelloSad)
  const resetCallBack = () => setHelloFace(IllusHello)

  return (
    <div className="bg-mytheme-sand w-screen...">
      <Header />

      <div className="px-12 sm:px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">

        <div className="grid grid-cols-1 place-self-center w-full...">
          <div className="relative h-80 w-80 place-self-center">
            <img className='h-80 place-self-center fill-gray-800' src={helloFace} />
            <div className="absolute top-20 right-12">
              <ClickableDonut burstCallBack={burstCallBack} resetCallBack={resetCallBack} />
            </div>

          </div>
          <div className="pb-8 space-y-4 sm:space-y-8 place-self-center">
            <div className="space-y-0 sm:space-y-2">
              <p className=" font-bold text-center text-3xl sm:text-5xl text-mytheme-charcoal">{"Hola! I'm Sarah,"}</p>
              <p className=" font-semibold text-center text-lg sm:text-2xl text-mytheme-charcoal">{"sugar-eater and experience designer"}</p>
            </div>
            <div className="justify-center">
              <p className="max-w-screen-sm text-center text-sm sm:text-lg text-mytheme-charcoal">
                {"Humanising products and processes through researching, defining parameters, and synthesising solutions is what I do"}
              </p>
            </div>

            {/* <ul className="max-w-max text-xs sm:text-sm text-mytheme-charcoal list-disc list-inside">
              <li>{"Branding, illustration, & digital / traditional painting"}</li>
              <li>{"Animation & basic video-editing"}</li>
              <li>{"Simple frontend coding (like this website!)"}</li>
              <li>{"Offer dessert recommendations :))"}</li>
            </ul> */}
          </div>
        </div>

        {/* Display projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 flex items-stretch">

          <Card imageSrc={ProjectCC} award={false} pageLink={"/projectCC"}
            title={"Client Connect"} body={"Empowering Relationship Managers to serve 600+ clients"} />
          <Card imageSrc={ProjectPayLah} pageLink={"/projectPayLah"} title={"PayLah!"} body={"Making everyday payments more engaging"} />
          <Card imageSrc={ProjectAlise} pageLink={"/projectAlise"} title={"alise"} body={"Shop until you (don't) drop"} />
          <Card imageSrc={ProjectFR} pageLink={"/projectFR"} award={true} awardName={"SG Mark 2021"} title={"Facilities Reporting"} body={"Helping employees get things fixed"} />
          <Card imageSrc={ProjectGYC} pageLink={"/projectGYC"} title={"Global Youth Conference"} body={"Branding an international sociocultural youth conference"} />
          <Card imageSrc={ProjectOC} pageLink={"/projectOC"} title={"One Community"} body={"Creating visuals with clear messages"} />
          <Card imageSrc={ProjectAO} pageLink={"/projectAO"} title={"Misc Projects"} body={"Branding a space-tech company that takes us to space sustainably, and more!"} />

        </div>
      </div>
    </div>

  )
}
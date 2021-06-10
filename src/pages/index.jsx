//Frameworks
import React, { useState } from 'react';

//Assets
import IllusHello from '../assets/illus_hello.png';
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
  
        <div className="px-24 xl:px-40 pt-8 pb-24 space-y-4 sm:space-y-8 justify-center w-full...">
  
          <div className="grid grid-cols-1 place-self-center w-full...">
            <div className="relative h-80 w-80 place-self-center">
              <img className='h-80 place-self-center fill-mytheme-charcoal' src={helloFace} />
              <div className="absolute top-20 right-12">
                <ClickableDonut burstCallBack={burstCallBack} resetCallBack={resetCallBack} />
              </div>
  
            </div>
            <div className="pb-8 space-y-0 sm:space-y-2 place-self-center">
              <p className=" font-bold text-center text-3xl sm:text-5xl text-mytheme-charcoal">{"Hola! I'm Sarah,"}</p>
              <p className=" font-semibold text-center text-lg sm:text-2xl text-mytheme-charcoal">{"sugar-eater and experience designer"}</p>
            </div>
          </div>
  
          {/* Display projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 flex items-stretch">
  
            <Card imageSrc={ProjectCC} award={false} pageLink={"/projectCC"}
            title={"Client Connect"} body={"Empowering Relationship Managers to serve 600+ clients"} />
            <Card imageSrc={ProjectPayLah} title={"PayLah!"} body={"Making everyday payments more engaging"} />
            <Card imageSrc={ProjectAlise} title={"alise"} body={"Shop until you (don't) drop"} />
            <Card imageSrc={ProjectFR} award={true} awardName={"SG Mark 2021"} title={"Facilities Reporting"} body={"Helping employees get things fixed"} />
            <Card imageSrc={ProjectGYC} title={"Global Youth Conference"} body={"Branding an international sociocultural youth conference"} />
            <Card imageSrc={ProjectOC} title={"One Community"} body={"Creating visuals with clear messages"} />
            <Card imageSrc={ProjectAO} title={"Misc Projects"} body={"Branding a space-tech company that takes us to space sustainably, and more!"} />
  
          </div>
        </div>
      </div>
  
    )
  }
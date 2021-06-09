//Frameworks
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Files
import IllusHello from './assets/illus_hello.png';
import IllusHelloSad from './assets/illus_hellosad.svg';
import ProjectCC from './assets/ProjectCC.png';
import ProjectPayLah from './assets/ProjectPayLah.png';
import ProjectAlise from './assets/ProjectAlise.png';
import ProjectFR from './assets/ProjectFR.png';
import ProjectOC from './assets/ProjectOC.png';
import ProjectGYC from './assets/ProjectGYC.png';
import ProjectAO from './assets/ProjectAO.png';

//Files
import { ClickableDonut } from './components/ClickableDonut';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';

export default function App() {
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

          <Card imageSrc={ProjectCC} award={false} title={"Client Connect"} body={"Empowering Relationship Managers to serve 600+ clients"} />
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

//Files
//import ProjectGridList from './ProjectGridList';

//Assets (non-local)
// import { Button } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import AppBar from '@material-ui/core/AppBar';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

//Assets (local)

// const text = "HELLO";

// function sayHi(){
//   return "HI";
// }

// const sayHiAgain = () => {
//   return "HI again";
// }

// const helloAgain = () => ("HELLO AGAIN");

// export default function App(){
//   return (
//   <div>
//     <h1>{text}</h1>
//     <h1>{"HEasdasdLLO"}</h1>
//     <h1>{1+2}</h1>
//     <h1>{sayHi}</h1>
//   </div>)
// }

// function TriggerTile(){
//   const useStyles = makeStyles((theme) => ({
// root: {
// '& > *': {
// margin: theme.spacing(1),
//       },
//     },
//   }));
//   const [isSHown, setIsShown] = useState(false);

//   return function ProjectGridList(
//     const classes = useStyles();
// <div className={classes.root}>
// <GridList
//   cellHeight={160}
//   className={classes.gridList}
//   cols={3}>
//   {tileData.map((tile) => (
//     <GridListTile
//       key={tile.img}
//       cols={tile.cols || 1}
//       onMouseEnter={() => setIsShown(true)}
//       onMouseLeave={() => setIsShown(false)}
//     >
//       <img src={tile.img} alt={tile.title} />
//       {IsShown && (
//         <GridListTileBar
//           title={tile.title}
//           titlePosition="bottom"
//           actionIcon={
//             <IconButton aria-label={`View ${tile.title}`} className={classes.icon}>
//               <ArrowForwardRoundedIcon />
//             </IconButton>
//           }
//           actionPosition="right"
//           className={classes.titleBar}
//         />
//       )}
//     </GridListTile>
//   ))}
// </GridList>
// </div>
// )
// }
//   )
// }


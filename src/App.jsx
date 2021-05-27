//Frameworks
import React, { useState } from 'react';


//Files
import IllusHello from './assets/illus_hello.png';
import IllusHelloSad from './assets/illus_hellosad.svg';
import ProjectCC from './assets/ProjectCC.png';
import ProjectPayLah from './assets/ProjectPayLah.png';
import ProjectAlise from './assets/ProjectAlise.png';
import ProjectOC from './assets/ProjectOC.png';
import ProjectGYC from './assets/ProjectGYC.png';
import ProjectAO from './assets/ProjectAO.png';
import Donut0 from './assets/donut0.svg';
import Donut1 from './assets/donut1.svg';
import Donut2 from './assets/donut2.svg';
import Donut3 from './assets/donut3.svg';
import Donut4 from './assets/donut4.svg';


export default function App() {
  const [IsShown, setIsShown] = useState(false);
  const [NoOfBites, setNoOfBites] = useState(0);

  return (
    <div className="bg-mytheme-sand w-screen...">
      <div className="flex overflow-visible grid grid-cols-1 px-4 py-2 space-x-8 bg-mytheme-sand w-full...">
        <button className="p-2 rounded inline-flex w-max justify-center place-self-end group hover:bg-mytheme-shell" onMouseEnter={() => setIsShown(!IsShown)} onMouseLeave={() => { setIsShown(false) }} id="Let's chat" aria-expanded="true" aria-haspopup="true">
          <p className='font-medium text-mytheme-charcoal group-hover:text-gray-900'>{"🤙 Let's chat!"}</p>
        </button>
        {IsShown &&
          <div className="z-30 absolute right-4 top-12 w-max rounded-lg shadow-lg" onMouseEnter={() => setIsShown(!IsShown)} onMouseLeave={() => { setIsShown(false) }}>
            <div className="py-1 px-4 divide-y divide-mytheme-shell w-max rounded-lg bg-white" role="none" onMouseEnter={() => setIsShown(!IsShown)} onMouseLeave={() => { setIsShown(false) }}>
              <a href="#" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">
                <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" /></svg>
                <div className="px-1"></div>
                {"+65 9052 9042"}</a>
              <a href="#" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">
                <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
                </svg>
                <div className="px-1"></div>
                {"Email"}</a>
              <a href="#" className="font-medium text-mytheme-charcoal flex py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">
                <svg className="w-4 fill-mytheme-ebony" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M11.4521492,9.45214919 C11.935252,9.15825757 12.4822556,9 13,9 L14,9 C15.3939534,9 17,10.1471761 17,12 L17,16 L15,16 L15,12 C15,11.4242524 14.4060466,11 14,11 L13,11 C12.5939534,11 12,11.4242524 12,12 L12,16 L10,16 L10,9 L11,9 L11.4521492,9.45214919 Z M8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 C8.55228475,6 9,6.44771525 9,7 C9,7.55228475 8.55228475,8 8,8 Z M9,16 L7,16 L7,9 L9,9 L9,16 Z" fillRule="evenodd" />
                </svg>
                <div className="px-1"></div>
                {"LinkedIn"}</a>
              <form method="POST" action="#" role="none">
                <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">
                  {"Placeholder"}
                </button>
              </form>
            </div>
          </div>
        }
      </div>


      <div className="px-24 pt-8 pb-24 space-y-8 justify-center w-full...">

        <div className="grid grid-cols-1 place-self-center w-full...">
          <div className="relative h-80 w-80 place-self-center">
            {NoOfBites < 4 &&
              <img className='h-80 place-self-center fill-mytheme-charcoal' src={IllusHello} />
            }
            {NoOfBites == 4 &&
              <img className='h-80 place-self-center fill-mytheme-charcoal' src={IllusHelloSad} />
            }
            {NoOfBites == 0 &&
              <div className="absolute top-20 right-12">
                <img className="h-16 animate-bounce cursor-pointer" src={Donut0} onClick={() => setNoOfBites(1)} />
              </div>}
            {NoOfBites == 1 &&
              <div className="absolute top-20 right-12">
                <img className="h-16 animate-bounce cursor-pointer" src={Donut1} onClick={() => setNoOfBites(2)} />
              </div>}
            {NoOfBites == 2 &&
              <div className="absolute top-20 right-12">
                <img className="h-16 animate-bounce cursor-pointer" src={Donut2} onClick={() => setNoOfBites(3)} />
              </div>}
            {NoOfBites == 3 &&
              <div className="absolute top-20 right-12">
                <img className="h-16 animate-bounce cursor-pointer" src={Donut3} onClick={() => setNoOfBites(4)} />
              </div>}
            {NoOfBites == 4 &&
              <div className="absolute top-20 right-12">
                <img className="h-16 animate-bounce cursor-pointer" src={Donut4} onClick={() => setNoOfBites(0)} />
              </div>}
          </div>
          <div className="pb-8 space-y-2 place-self-center">
            <p className="font-bold text-center text-5xl text-mytheme-charcoal">{"Hola! I'm Sarah,"}</p>
            <p className="font-semibold text-center text-2xl text-mytheme-charcoal">{"sugar-eater and experience designer"}</p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex items-stretch">

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={ProjectCC} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Client Connect"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Empowering Relationship Managers to serve 600+ clients"}</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="object-cover" src={ProjectPayLah} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"PayLah!"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Making everyday payments more engaging"}</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={ProjectAlise} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"alise"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"DON'T shop until you drop"}</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={ProjectGYC} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Global Youth Conference"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Branding an international sociocultural forum for youths"}</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={ProjectOC} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"One Community"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Clarity in communication"}</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden group border-2 border-mytheme-shell bg-mytheme-pearl hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={ProjectAO} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Anchor Orbital++"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Branding a space-tech company that takes us to space sustainably, and more!"}</p>
            </div>
          </div>

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


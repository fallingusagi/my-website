//Frameworks
import React, { useState } from 'react';

//Files
import IllusHello from './assets/illus_hello.png';
import Project1 from './assets/ProjectTest1.png';
import Project2 from './assets/ProjectTest2.png';
import Project3 from './assets/ProjectTest3.png';
import Project4 from './assets/ProjectTest4.png';
import Project5 from './assets/ProjectTest5.png';
import Project6 from './assets/ProjectTest6.png';
import Donut from './assets/donut.png';

export default function App() {
  const [IsShown, setIsShown] = useState(false);

  return (
    <div className="bg-mytheme-sand w-screen...">
      <div className="flex overflow-visible grid grid-cols-1 px-4 py-2 flex space-x-8 bg-mytheme-sand w-full...">
        <button className="p-2 rounded inline-flex w-max justify-center place-self-end group hover:bg-mytheme-shell" onMouseEnter={() => setIsShown(!IsShown)} onMouseLeave={() => {setIsShown(false)}} id="Let's chat" aria-expanded="true" aria-haspopup="true">
          <p className='font-medium text-mytheme-charcoal group-hover:text-gray-900'>{"🤙 Let's chat!"}</p>
        </button>
        {IsShown &&
          <div className="origin-bottom-right transform translate y-4 rounded-lg shadow-lg" onMouseEnter={() => setIsShown(!IsShown)} onMouseLeave={() => {setIsShown(false)}}>
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">{"+65 9052 9042"}</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">{"Email"}</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm bg-white hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">{"LinkedIn"}</a>
              <form method="POST" action="#" role="none">
                <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        }
      </div>

      <div className="px-24 pt-8 pb-24 space-y-8 justify-center w-full...">

        <div className="grid grid-cols-1 place-self-center w-full...">
          <div className="relative h-80 w-80 place-self-center">
            <img className='h-80 place-self-center' src={IllusHello} />
            <div className="absolute top-20 right-12">
              <img className="h-16 animate-bounce" src={Donut} />
            </div>
          </div>
          <div className="pb-8 space-y-2 place-self-center">
            <p className="font-bold text-center text-5xl text-mytheme-charcoal">{"Hola! I'm Sarah,"}</p>
            <p className="font-semibold text-center text-2xl text-mytheme-charcoal">{"sugar-eater and experience designer"}</p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex items-stretch">

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project1} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Client Connect"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Empowering Relationship Managers to serve 600+ clients"}</p>
            </div>
          </div>

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project2} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"PayLah!"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Making everyday payments more engaging"}</p>
            </div>
          </div>

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project3} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"alise"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"DON'T shop until you drop"}</p>
            </div>
          </div>

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project4} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"One Community"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Clarity in communication"}</p>
            </div>
          </div>

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project5} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Global Youth Conference"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Branding an international sociocultural forum for youths"}</p>
            </div>
          </div>

          <div className="rounded-lg group border-2 border-mytheme-shell hover:bg-white hover:shadow-lg hover:border-transparent">
            <img className="w-full object-cover" src={Project6} />
            <div className="p-4">
              <p className="font-medium text-mytheme-charcoal group-hover:text-gray-900">{"Anchor Orbital"}</p>
              <p className="text-sm text-mytheme-ebony group-hover:text-gray-500">{"Branding a space-tech company that takes us to space sustainably"}</p>
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


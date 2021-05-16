//Frameworks
import React, { useState } from 'react';

//Files
import tileData from './tileData';
//import ProjectGridList from './ProjectGridList';

//Assets (non-local)
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

//Assets (local)
import illusHello from './assets/illus_hello.png';

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

// Page start
export default function App() {
  return (
      <Grid container spacing={12}>

        <Grid item xs={12}>
          <AppBar
            position="sticky"
            color="#F3847G">
            Test
            <Button
              color="primary"
              onClick={() => { alert('clicked') }} Click me>
              Let's chat!
            </Button>
          </AppBar>
        </Grid>


        <Grid item xs={12}>
          <img src={illusHello} />
        </Grid>


        <Grid item xs={12}>
          Hola! I'm Sarah, and I design user experiences :)
        </Grid>
      </Grid>
  );
}


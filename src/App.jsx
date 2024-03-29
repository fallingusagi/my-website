//Frameworks
import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

//Pages
import {ScrollToTop} from './components/ScrollToTop';
import { Main } from "./pages";
import { ProjectPageCC } from './pages/projectCC';
import { ProjectPagePayments } from './pages/projectPayments';
import { ProjectPageAlise } from './pages/projectAlise';
import { ProjectPageFR } from './pages/projectFR';
import { ProjectPageGYC } from './pages/projectGYC';
import { ProjectPageOC } from './pages/projectOC';
import { ProjectPageCharter } from './pages/projectCharter';
import { NotFound } from './pages/lalala';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projectCC" component={ProjectPageCC} />
          <Route exact path="/projectPayments" component={ProjectPagePayments} />
          <Route exact path="/projectAlise" component={ProjectPageAlise} />
          <Route exact path="/projectFR" component={ProjectPageFR} />
          <Route exact path="/projectGYC" component={ProjectPageGYC} />
          <Route exact path="/projectOC" component={ProjectPageOC} />
          <Route exact path="/projectCharter" component={ProjectPageCharter} />
          <Route component={NotFound} status={404}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

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


import React from 'react';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import tileData from './tileData';



export default function TriggerTile() {
    const [isShown, setIsShown] = useState(false);
    return(
      <GridListTile 
      key={tile.img} 
      cols={tile.cols || 1}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      >
      <img src={tile.img} alt={tile.title} />
      {IsShown && (
        <GridListTileBar
        title={tile.title}
        titlePosition="bottom"
        actionIcon={
          <IconButton aria-label={`View ${tile.title}`} className={classes.icon}>
            <ArrowForwardRoundedIcon />
          </IconButton>
        }
        actionPosition="right"
        className={classes.titleBar}
      />
      )}
      </GridListTile>
    )
  }
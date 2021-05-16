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

import TriggerTile from './TriggerTile';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function ProjectGridList(){
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <GridList 
        cellHeight={160} 
        className={classes.gridList} 
        cols={3}>
          {tileData.map((tile) => (
            <TriggerTile></TriggerTile>
        ))}
        </GridList>
      </div>
    )
}
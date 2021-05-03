import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>CGU</Avatar>
      <Avatar className={classes.orange} variant='square'>NTU</Avatar>
      <Avatar className={classes.purple} variant='square'>NTHU</Avatar>
    </div>
  );
}

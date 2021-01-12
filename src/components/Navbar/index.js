import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: theme.palette.secondary.main
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           <Link to='/'> Catalog App</Link>
          </Typography>
         <Button color="inherit"> <Link to='/auth'>Sign In </Link></Button>
         <Button color="inherit"> <Link to='/login'>Login </Link></Button>
         <Button color="inherit"> <Link to='/logout'>Logout </Link></Button>
         <Button color="inherit"> <Link to='/product'>Products </Link></Button>
         <Button color="inherit"> <Link to='/addProduct'>Add Product </Link></Button>

          <Avatar className={classes.orange}>L</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
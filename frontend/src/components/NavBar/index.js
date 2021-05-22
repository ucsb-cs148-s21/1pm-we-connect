import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Switch,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink as Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textDecoration: 'none',
    color: 'inherit'
  },
}));

const Navbar = ({ setDark, dark }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" component={Link} to='/'>
            We Connect
          </Typography>
          <div>
            <Button color="inherit" component={Link} to='about'>About</Button>
            <Button color="inherit" component={Link} to='createPost'>Create Post</Button>
            <Switch
              checked={dark}
              onChange={() => setDark(prev => !prev)}
              name="darktheme"
            />
            <Typography variant="h6" component="label"/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;

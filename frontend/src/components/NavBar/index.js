import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import Brightness6 from "@material-ui/icons/Brightness6";
import Brightness7 from "@material-ui/icons/Brightness7";
import Menu from "@material-ui/icons/Menu";
import Drawer from "./Drawer"

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
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" component={Link} to='/'>
                We Connect
          </Typography>
          {
            mobile &&
            <>
              <Drawer dark={dark} setDark={setDark} open={open} setOpen={() => setOpen(prev => !prev)} />
              <IconButton onClick={() => setOpen(prev => !prev)}>
                <Menu />
              </IconButton>
            </>
          }

          {
            !mobile &&
            <>
              <div>
                <Button color="inherit" component={Link} to='createPost'>Create Post</Button>
                <Button color="inherit" component={Link} to='about'>About</Button>
                <Button color="inherit" component={Link} to='/help'>Help</Button>
                <Tooltip title="Set Dark Theme">
                  <IconButton onClick={() => setDark(prev => !prev)}>
                    {dark ? <Brightness6 /> : <Brightness7 />}
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" component="label" />
              </div>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;

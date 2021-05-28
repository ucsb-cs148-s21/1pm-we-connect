import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Create from '@material-ui/icons/Create';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import Brightness6 from "@material-ui/icons/Brightness6";
import Brightness7 from "@material-ui/icons/Brightness7";
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink as Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        minWidth: '40vw'
    },
});

export default function TemporaryDrawer({ open, setOpen, dark, setDark }) {
    const classes = useStyles();
    return (
        <div>
            <Drawer anchor="left" open={open} onClose={() => setOpen(prev => !prev)}>
                <div
                    className={classes.fullList}
                    role="presentation"
                >
                    <List>
                        <ListItem button onClick={() => setOpen(prev => !prev)} component={Link} to="/about">
                            <ListItemIcon><Info /></ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                        <ListItem button onClick={() => setOpen(prev => !prev)} component={Link} to="/createPost">
                            <ListItemIcon><Create /></ListItemIcon>
                            <ListItemText primary={"Create Post"} />
                        </ListItem>
                        <ListItem button onClick={() => setOpen(prev => !prev)} component={Link} to="/help">
                            <ListItemIcon><Help/></ListItemIcon>
                            <ListItemText primary={"Help!"} />
                        </ListItem>
                      <ListItem button onClick={() => setDark(prev => !prev)}>
                            <ListItemIcon> {dark ? <Brightness6 /> : <Brightness7 />}</ListItemIcon>
                            <ListItemText primary={`Set ${dark ? "Light" : "Dark" } Theme`} />
                        </ListItem>
                    </List>
                </div>

            </Drawer>
        </div>
    );
}

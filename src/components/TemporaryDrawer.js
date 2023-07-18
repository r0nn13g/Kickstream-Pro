import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem >
              <ListItemText primary="" />
          </ListItem>
          <ListItem >
          </ListItem>
          <ListItem >
              <Link to="/channels" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ channels" />
              </Link>
          </ListItem>
          <ListItem >
              <Link to="/create" style={{ textDecoration: 'none' , color: 'var(--green-elements)' }}>
              <ListItemText primary="+ create" />
              </Link>
          </ListItem>
          <Divider />
          <ListItem >
              <Link to="/about-us" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ about us" />
              </Link>
          </ListItem>
          <ListItem >
              <Link to="/contact" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ contact" />
              </Link>
          </ListItem>
          <ListItem >
              <Link to="/signup" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ sign up" />
              </Link>
          </ListItem>
          {/* Dark Mode Toggle switch */}
          {/* <DarkMode/> */}
      </List>
      <Divider />
      <List>
      <ListItem>
              <Link to="/" style={{ textDecoration: 'none' , color: 'var(--green-elements)' }}>
              <b>Kicksta</b>
              <ListItemText secondary="Created by Ronnie Garcia" />
              </Link>
          </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon id="menu-icon"  fontSize="large" style={{ color: 'white' }} /></Button>
          <Drawer
            PaperProps={{
            sx: {
              backgroundColor: "#1b1b1be4",
            }
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onClick={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
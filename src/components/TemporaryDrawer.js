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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
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
              <Link to="/create" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ create" />
              </Link>
          </ListItem>
          <Divider />
          <ListItem >
             <a href="https://github.com/r0nn13g/Kicksta-for-kick-live-streaming" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ github" />
             </a>
          </ListItem>
          <ListItem >
              <Link to="/support" style={{ textDecoration: 'none' , color: 'var(--green-elements)' }}>
              <ListItemText primary="+ support" />
              </Link>
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem>
              <Link to="/" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <b>Kicksta®</b>
              <ListItemText secondary="" />
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
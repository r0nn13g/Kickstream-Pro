import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
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
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' , color: 'var(--white-elements)' }} >
              <Link to="/channels" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ channels" />
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' , color: 'var(--white-elements)' }} >
              <Link to="/create" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ create" />
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' , color: 'var(--white-elements)' }} >
              <Link to="/support" style={{textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <ListItemText primary="+ support" />
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' , color: 'var(--white-elements)' }}  >
             <a href="https://github.com/r0nn13g/Kicksta-for-kick-live-streaming" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' , color: 'var(--white-elements)' }}>
              <GitHubIcon />
             </a>
          </ListItem>
      </List>
      <List>
      <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' , color: 'var(--white-elements)' }} >
              <Link to="/" style={{ textDecoration: 'none' , color: 'var(--green-elements)' }}>
              {/* <h1>Kicksta®</h1> */}
               <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
              <ListItemText secondary="" />
              </Link>
          </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon id="menu-icon"  fontSize="large" style={{ color: 'white' }} /></Button>
          <Drawer
            PaperProps={{
            sx: {
              backgroundColor: "#1b1b1be4",
              marginBottom: '10px'
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
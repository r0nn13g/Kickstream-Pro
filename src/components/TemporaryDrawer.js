import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none'  }} >
            <Link to="/streaming" style={{textDecoration: 'none' , color: 'white' }}>
              <b>Streaming +</b>
            </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none'  }} >
            <Link to="/news" style={{ textDecoration: 'none' , color: 'white' }}>
              <b>News +</b>
            </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/create" style={{ textDecoration: 'none' , color: 'white' }}>
              <b>Create +</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/checker" style={{textDecoration: 'none' , color: 'white' }}>
              <b>Checker +</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/trending" style={{ textDecoration: 'none' , color: 'white' }}>
              <b>Trending +</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/support" style={{textDecoration: 'none' , color: 'white' }}>
              <b>Support +</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/contact" style={{textDecoration: 'none' , color: 'white' }}>
              <b>Contact +</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }}  >
          </ListItem>
      </List>
      <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} >
          <a href="https://www.github.com/r0nn13g/Kickstream-Pro" style={{ textDecoration: 'none' , color: 'var(--gray-elements)' }}>
            <h3>IRL Network</h3>
          </a>
            &nbsp; &nbsp;&nbsp;
              <GitHubIcon style={{fill: 'orange'}}/>
      </ListItem>
    </Box>
  );
  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id="nav-drawer-button" onClick={toggleDrawer(anchor, true)}> 
            <MenuIcon id="menu-icon" style={{ color: 'white' }} />
          </Button>
          <Drawer
            PaperProps={{
            sx: {
              backgroundColor: "#1b1b1be4",
              margin: '0px',
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
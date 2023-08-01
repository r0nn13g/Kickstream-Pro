import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ListIcon from '@mui/icons-material/List';
import '../styles/accordian-styles.css';

export default function BasicAccordionCreate() {
  return (
      <Accordion sx={{ 
    backgroundColor: '#333333',
    color: 'var(--white-elements)'
    }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Create a personalized watch list
        </AccordionSummary>
        <AccordionDetails>
              <li id="accordian-text">
                Click profile photo to get directed to a streamers channel.
              </li>
              <li id="accordian-text">
                Click title or viewers to open chatroom in a second window.                
              </li> 
              <li id="accordian-text">
              search for a kick live stream and add them to your watch list.
              </li>
        </AccordionDetails>
      </Accordion>
  );
}

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/accordian-styles.css';

export default function BasicAccordionCreate() {
  return (
      <Accordion sx={{ 
    backgroundColor: '#2a2a2a',
    color: 'var(--white-elements)'
    }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         Shortcuts
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

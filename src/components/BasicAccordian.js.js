import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/accordian-styles.css';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion sx={{ 
    backgroundColor: '#2a2a2a',
    color: 'var(--white-elements)'
    }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Streamers
        </AccordionSummary>
        <AccordionDetails>
              <li id="accordian-text">
                Click profile photo to get directed to a streamers channel.
              </li>
              <li id="accordian-text">
                Click title or viewers to open chatroom in a second window.                
              </li>  
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import * as React from 'react';
import '../styles/accordian-styles.css';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function BanAccordion() {
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
          How it works
        </AccordionSummary>
        <AccordionDetails>
              <li id="accordian-text">
                Enter a streamers channel to see if their account is active or banned.
              </li>
              <br></br>
              <li id="accordian-text">
                This tool only works with Kick streamers that have gone live atleast once and uploaded emotes.          
              </li>  
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

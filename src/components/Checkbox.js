import { filterData } from '../config';
import _debounce from 'lodash/debounce';
import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionStyle = { width: '72%', margin: 'auto', marginTop: 5 };

export default function CheckBox(props) {
  const [checked, setChecked] = useState([]);

  const handleToggle = _debounce((value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if(currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setChecked(newChecked);
    // update this checked information into Parent Component 
    props.handleFilters(newChecked);
  }, 100);

  return(
    <div >
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter Beaches Using Below Values</Typography>
        </AccordionSummary>
        <AccordionDetails>
          { filterData.map((data, index) => { 
            return (
              <span key={index}>
                <input id={index} value={data.name} type="checkbox" onClick={() => handleToggle(data.value)}/>
                <span> {data.name} </span>
              </span>
            )  
          })}          
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
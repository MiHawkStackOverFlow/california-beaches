import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { filterData } from '../config';

const accordionStyle = { width: '72%', margin: 'auto', marginTop: 5 };

export default function CheckBox(props) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
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
  }

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
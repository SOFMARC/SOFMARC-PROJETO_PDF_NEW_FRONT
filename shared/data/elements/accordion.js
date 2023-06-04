import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}   >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="1bh-header">
          <div sx={{ width: "33%", flexShrink: 0 }}>General settings I am an accordion</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <div sx={{ width: "33%", flexShrink: 0 }}>Users You are currently not an owner</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <div sx={{ width: "33%", flexShrink: 0 }}>Advanced settings Filtering has been entirely disabled for whole web server</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <div sx={{ width: "33%", flexShrink: 0 }}>Personal data</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import candidateJson from "../../utils/candidate.json";

export default function RequestList() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [rows] = React.useState(candidateJson);

  return (
    <div className="container pt-3">
      <h4 >Request List:</h4>
      {rows.map((row, index) => {
        return (
          <Accordion
            key={row.experience}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <div className="container">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <Typography className="col-md-2 col-sm-4 col-xs-12">
                      Practise:{row.role}
                    </Typography>
                    <Typography className="col-md-2 col-sm-4 col-xs-12">
                      Txperince:{row.experience}
                    </Typography>
                    <Typography className="col-md-2 col-sm-4 col-xs-12">
                      Status:open
                    </Typography>
                    <Typography className="col-md-2 col-sm-4 col-xs-12">
                      Location:{row.location}
                    </Typography>
                    <div className="col-md-2 col-sm-12 col-xs-12 ">
                      <Button variant="outlined" className="float-end" >
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {row.location}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

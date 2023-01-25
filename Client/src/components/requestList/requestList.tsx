import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { State } from "../../store/state";
import { useSelector, useDispatch } from "react-redux";
import { getRequestList } from "../../store/backend.action";
import { RequestForm } from "../../utils/types";

export default function RequestList() {
  const naviagate = useNavigate();
  const dispatch = useDispatch<any>()
  const [expanded, setExpanded] = React.useState<string | false>(false);
  

  const requestList = useSelector((state: State) => state.requestList);
  React.useEffect(() => {
    console.log(requestList)
  }, [requestList]);
  React.useEffect(() => {
    dispatch(getRequestList())
  }, []);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const navigateToForm = () => {
    naviagate('/requestForm')
  }
  return (
    <div className="container pt-3 mw-600">
      <h4 >Request List:</h4>
      {
        requestList?.map((req: RequestForm, i: number) => (
          <Accordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
            >
              <div className="container">
                <div className="row">

                  <Typography className="col-md-2 col-sm-4 col-6">
                    Practise: {req.practiceName}
                  </Typography>
                  <Typography className="col-md-2 col-sm-4 col-6">
                    Requested: {req.numberOfPositions}
                  </Typography>
                  <Typography className="col-md-2 col-sm-4 col-6">
                    Filled: {req.numberOfPositionsFullfilled}
                  </Typography>

                  <Typography className="col-md-2 col-sm-4 col-6">
                    Days open:{req.daysOpen}
                  </Typography>
                  <Typography className="col-md-2 col-sm-4 col-6">
                    Status: Open
                  </Typography>
                  <div className="col-md-2 col-sm-12 col-12 ">
                    <Button variant="outlined" className="float-end" onClick={navigateToForm}>
                      <EditIcon></EditIcon>
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="container">
                <form className="row">
                  <div className="col-sm-2 col-md-2  col-6  form-group">
                    <label className="control-label fw-bold">Account Name</label>
                    <p className="form-control-static">{req.accountName}</p>
                  </div>
                  <div className="col-sm-2 col-md-2  col-6  form-group">
                    <label className="control-label fw-bold">Client Partner</label>
                    <p className="form-control-static">{req.clientPartner}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Enagagement Manager</label>
                    <p className="form-control-static">{req.enagagementManager}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Role</label>
                    <p className="form-control-static">{req.role}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Skills</label>
                    <p>
                      {
                        req.skillSet.map((s,i) => <span key={i}>{s}</span>)
                      }
                    </p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Experience</label>
                    <p className="form-control-static">{req.experience}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Days Passed</label>
                    <p className="form-control-static">{req.daysPassed}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">BillingStartDate</label>
                    <p className="form-control-static">{req.tentativeBillingStartDate}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Cost Rate Cap</label>
                    <p className="form-control-static">{req.costRateCap}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">PositionType</label>
                    <p className="form-control-static">{req.positionType}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Client Interview</label>
                    <p className="form-control-static">{req.clientInterivew}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Location</label>
                    <p className="form-control-static">{req.location}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6   form-group">
                    <label className="control-label fw-bold">Request Date To Practice</label>
                    <p className="form-control-static">{req.requestDateToPractice}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Request Date To Hiring</label>
                    <p className="form-control-static">{req.requestDateToHiring}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Positions offered</label>
                    <p className="form-control-static">{req.numberOfPositionsOffered}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Interview Status</label>
                    <p className="form-control-static">{req.interviewStatus}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Duration</label>
                    <p className="form-control-static">{req.daysOpen}</p>
                  </div>
                  <div className="col-sm-2 col-md-2 col-6  form-group">
                    <label className="control-label fw-bold">Comments</label>
                    <p className="form-control-static">{req.comments}</p>
                  </div>
                </form>

              </div>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>

  );
}

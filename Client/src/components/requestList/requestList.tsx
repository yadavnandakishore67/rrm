import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { useSelector, useDispatch } from "react-redux";

import './requestList.scss'
import { State } from "../../store/state";
import { getRequestList } from "../../store/backend.action";
import { RequestForm } from "../../utils/types";
import moment, { MomentInput } from "moment";
import SearchFilter from "../search/search";
import { requestFormBody, requestFormHeader } from "../../utils/requestListObj";
import { Pagination } from "@mui/material";

export default function RequestList() {
  const naviagate = useNavigate();
  const dispatch = useDispatch<any>()
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const userName = useSelector((state: State) => state.userName);

  const requestList = useSelector((state: State) => state.requestList);

  React.useEffect(() => {
    console.log(requestList)
  }, [requestList]);

  React.useEffect(() => {
    console.log(userName)
  }, [userName]);

  React.useEffect(() => {
    dispatch(getRequestList())
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const navigateToForm = (req?: any) => {
    naviagate('/requestForm', { state: { details: req } })
  }

  const isDate = (date: string | number | Date | boolean) => {
    return moment(date as MomentInput, moment.ISO_8601, true).isValid();
  }

  const [page, setPage] = React.useState(1);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => { setPage(value); };

  const currentData = requestList.slice((page - 1) * 10, page * 10);
  return (

    <div className="container pt-3 mh-600">
      <div className="row pb-2">
        <div className="col-sm-8 col-md-8 col-8">
          <h4 >Request List</h4>
        </div>
        <div className="col-sm-4 col-md-4 col-4">
          <Button variant="outlined" className="float-end" onClick={navigateToForm} >
            Add New Request
          </Button>
        </div>
      </div>
      <SearchFilter />
      {
        currentData ?
          currentData?.map((req: RequestForm, i: number) => (
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
                    {
                      Object.entries(requestFormHeader).map(([key, val]) => {
                        return <Typography key={key} className="col-md-2 col-sm-4 col-6">
                          {val}: {req[(key as keyof RequestForm)]}
                        </Typography>
                      })
                    }
                    <div className="col-md-2 col-sm-12 col-12 ">
                      <Button variant="outlined" className="float-end" onClick={() => navigateToForm(req)}>
                        <EditIcon></EditIcon>
                      </Button>
                      <Button variant="outlined" className="float-end" onClick={() => navigateToForm(req)}>
                        <NotInterestedIcon></NotInterestedIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="container">
                  <form className="row">
                    {
                      Object.entries(requestFormBody).map(([k, v], i) => {
                        const value = req[k as keyof RequestForm];
                        return (
                          <div className={` form-group ${k === 'comments' ? 'col-sm-12 col-md-12 col-12' : 'col-sm-2 col-md-2  col-6'} `}
                            key={i}>
                            <label className="control-label fw-bold">{v}</label>
                            <p className="form-control-static">{
                              !Array.isArray(value) && !isDate(value) ?
                                value : Array.isArray(value) ? value.map((v, i) => <span key={i}>{v}</span>) : moment(value as string).format("DD-mm-yyyy")
                            }</p>
                          </div>)
                      })
                    }
                  </form>

                </div>
              </AccordionDetails>
            </Accordion>
          )) : <div className="text-center pt-5">No results found</div>
      }
      <div className="col-sm-4 col-md-2 col-12 pt-3 float-end">
        <Pagination count={Math.ceil(requestList.length / 10)} page={page} onChange={handlePageChange} />
      </div>
    </div>

  );
}

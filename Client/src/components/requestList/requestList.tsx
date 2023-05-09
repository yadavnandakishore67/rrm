import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";

import "./requestList.scss";
import { State } from "../../store/state";
import {
  deleteRequestRequested,
  getRequestList,
  getSuggestions,
} from "../../store/backend.action";
import { Comments, RequestForm, Roles, User } from "../../utils/types";
import moment, { MomentInput } from "moment";
import SearchFilter from "../search/search";
import { requestFormBody, requestFormHeader } from "../../utils/requestListObj";
import { Pagination } from "@mui/material";

export default function RequestList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [filteredList, setFilteredList] = React.useState<RequestForm[]>([]);

  const role = useSelector((state: State) => state.userDetails?.role.name);
  const requestList = useSelector((state: State) => state.requestList);

  React.useEffect(() => {
    setFilteredList(requestList);
  }, [requestList]);

  //to fetch request list
  React.useEffect(() => {
    dispatch(getRequestList());
  }, []);

  //accordian expand and collapse
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  //navigation reuestForm page
  const navigateToForm = (req?: any) => {
    dispatch(getSuggestions());
    navigate("/requestForm", { state: { details: req } });
  };

  const isDate = (date: string | number | Date | boolean | User) => {
    return moment(date as MomentInput, moment.ISO_8601, true).isValid();
  };

  function deleteRecord(req: any) {
    dispatch(deleteRequestRequested(req._id));
  }

  //pagination with 10 records on each page
  const [page, setPage] = useState(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredListData = filteredList?.slice((page - 1) * 10, page * 10);
  return (
    <div className="container pt-3 mh-600">
      <div className="row pb-2">
        <div className="col-sm-8 col-md-8 col-8">
          <h4>Request List</h4>
        </div>
        {role === Roles.admin && (
          <div className="col-sm-4 col-md-4 col-4">
            <Button
              variant="outlined"
              className="float-end"
              onClick={() => navigateToForm()}
            >
              Add New Request
            </Button>
          </div>
        )}
      </div>
      <SearchFilter
        filteredList={requestList}
        setFilteredList={setFilteredList}
      />
      {filteredListData?.length > 0 ? (
        filteredListData?.map((req: RequestForm, i: number) => (
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
                  {Object.entries(requestFormHeader).map(([key, val], q) => {
                    return (
                      <>
                        <div
                          key={q}
                          className="col-md-2 col-sm-4 col-6 filter-rrm"
                        >
                          {key !== "daysOpen" &&
                            key !== "numberOfPositionsFullfilled" && (
                              <>
                                {" "}
                                <span className="fw-bolder">{val}:</span>
                                <span>
                                  {req[key as keyof RequestForm] as string}
                                </span>
                              </>
                            )}
                          {key === "daysOpen" && req.status !== "closed" && (
                            <>
                              <span className="fw-bolder">{val}:</span>
                              <span>
                                {daysBetween(req.createdAt as string)}
                              </span>
                            </>
                          )}
                          {key === "numberOfPositionsFullfilled" && (
                            <>
                              {" "}
                              <span className="fw-bolder">{val}:</span>
                              <span>
                                {req.numberOfPositions -
                                  req.numberOfPositionsOffered}
                              </span>
                            </>
                          )}
                        </div>
                      </>
                    );
                  })}
                  <div className="col-md-2 col-sm-12 col-12 ">
                    <Button
                      variant="outlined"
                      className="float-end"
                      onClick={() => navigateToForm(req)}
                    >
                      <EditIcon></EditIcon>
                    </Button>
                    {role === Roles.admin && (
                      <Button
                        variant="outlined"
                        className="float-end"
                        onClick={() => deleteRecord(req)}
                      >
                        <DeleteOutlinedIcon />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="container">
                <form className="row">
                  {Object.entries(requestFormBody).map(([k, v], j) => {
                    const value = req[k as keyof RequestForm];
                    return k !== "comments" && k !== "enagagementManager" ? (
                      <div
                        className="form-group col-sm-2 col-md-2  col-6"
                        key={j}
                      >
                        <label className="control-label fw-bold">{v}</label>
                        <p className="form-control-static">
                          {!Array.isArray(value) && !isDate(value)
                            ? (value as string)
                            : Array.isArray(value)
                            ? value.map((v, q) => (
                                <span className="t-stack" key={q}>
                                  {v as string}
                                </span>
                              ))
                            : moment(value as string).format("DD-MM-YYYY")}
                        </p>
                      </div>
                    ) : k === "comments" ? (
                      <div className="form-group col-sm-12 col-md-12 col-12">
                        <label className="control-label fw-bold">{v}:</label>
                        <div className="form-control-static">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">User</th>
                                <th scope="col">Create Date</th>
                                <th scope="col">Comment</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(value as Comments[]).map((r, z) => {
                                return (
                                  <tr key={z}>
                                    <th scope="row">{z + 1}</th>
                                    <td>{(r as Comments).author.first_name}</td>
                                    <td>{(r as Comments).createdAt}</td>
                                    <td>{(r as Comments).comment}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="form-group col-sm-2 col-md-2  col-6"
                        key={j}
                      >
                        <label className="control-label fw-bold">{v}</label>
                        <p className="form-control-static">
                          {(value as User)?.first_name}
                        </p>
                      </div>
                    );
                  })}
                </form>
              </div>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <div className="text-center pt-5">No results found</div>
      )}
      {filteredListData?.length > 0 && (
        <div className="d-flex py-3">
          <Pagination
            className=" ms-auto"
            count={Math.ceil(filteredListData?.length / 10)}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

function daysBetween(startDate: string) {
  // The number of milliseconds in all UTC days (no DST)
  const date1 = new Date(startDate);
  const date2 = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const end = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  // so it's safe to divide by 24 hours
  return (end - start) / oneDay;
}

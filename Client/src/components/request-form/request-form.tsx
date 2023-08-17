import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocation, useNavigate } from "react-router";
import "./request-form.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect, useState } from "react";
import { Dayjs } from "dayjs";

import { useDispatch, useSelector } from "react-redux";
import {
  createUserProfile,
  updateUserProfile,
} from "../../store/backend.action";
import { State } from "../../store/state";
import { Comments, IFormInput, Roles } from "../../utils/types";
import MessageModal from "../../common/message-modal";

export default function RequestForm() {
  let updatedRequestData = {};

  const dispatch = useDispatch<any>();

  const userDetails = useSelector((state: State) => state.userDetails);

  const suggestions = useSelector((state: State) => state.suggestions);

  const isAdmin = useSelector(
    (state: State) => state.userDetails?.role.name === Roles.admin
  );

  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    control,
    reset,
  } = useForm<IFormInput>();

  React.useEffect(() => {
    console.log("requestDetails==>", userDetails?._id);
    if (userDetails) {
      reset({ engagementManager: userDetails?.first_name });
    }
  }, [userDetails]);

  const location = useLocation();

  const requestDetails = location?.state?.details ? location.state.details : {};

  if (Object.keys(requestDetails).length > 0) {
    updatedRequestData = {
      ...requestDetails,
      engagementManager: requestDetails.createdBy
        ? requestDetails.createdBy.first_name
        : userDetails?.first_name,
    };
  }

  const fields = [
    "accountName",
    "engagementManager",
    "clientPartner",
    "role",
    "daysPassed",
    "experience",
    "costRateCap",
    "skillSet",
    "practiceName",
    "subPractice",
    "subSubPractice",
    "positionType",
    "location",
    "duration",
    "daysOpen",
    "numberOfPositions",
    "numberOfPositionsFullfilled",
    "numberOfPositionsOffered",
    "interviewStatus",
    "status",
    "tentativeBillingStartDate",
    "requestDateToPractice",
    "requestDateToHiring",
    "clientInterivew",
    "newComment",
  ];

  useEffect(() => {
    const data = updatedRequestData ? updatedRequestData : requestDetails;
    fields.forEach((field: any) => setValue(field, data[field]));
  }, []);

  const registerOptions = {
    accountName: { required: "account Name is required" },
    clientPartner: { required: "client partner is required" },
    role: { required: "role is required" },
    daysPassed: { required: "days passed is required" },
    experience: { required: "experience is required" },
    costRateCap: { required: "costRateCap is required" },
    skillSet: { required: "skillSet is required" },
    practiceName: { required: "practiceName is required" },
    positionType: { required: "positionType is required" },
    location: { required: "location is required" },
    duration: { required: "duration is required" },
    numberOfPositions: { required: "numberOfPositions is required" },
    numberOfPositionsFullfilled: {
      required: "numberOfPositionsFullfilled is required",
    },
    numberOfPositionsOffered: {
      required: "numberOfPositionsOffered is required",
    },
    interviewStatus: { required: "interviewStatus is required" },
    status: { required: "status is required" },
    tentativeBillingStartDate: {
      required: "tentativeBillingStartDate is required",
    },
    requestDateToPractice: { required: "requestDateToPractice is required" },
    requestDateToHiring: { required: "requestDateToHiring is required" },
    clientInterivew: { required: "clientInterivew is required" },
    newComment: { required: "Comments is required" },
  };

  function formData(data: IFormInput) {
    console.log(data);
    if (userDetails && userDetails?._id && !requestDetails.createdBy) {
      const requestData: any = {
        ...data,
        enagagementManager: {
          _id: userDetails?._id,
          first_name: userDetails.first_name,
        },
        comments: [
          {
            author: {
              _id: userDetails?._id,
              first_name: userDetails.first_name,
            },
            comment: data.newComment,
            createdAt: new Date().toLocaleString(),
          },
        ],
        createdBy: userDetails?._id,
        updatedBy: userDetails?._id,
      };
      console.log(requestData);
      dispatch(createUserProfile(requestData));
    } else {
      requestDetails.comments.push({
        author: { _id: userDetails?._id, first_name: userDetails?.first_name },
        comment: data.newComment,
        createdAt: new Date().toLocaleString(),
      });
      const requestData: any = {
        ...data,
        enagagementManager: {
          _id: userDetails?._id,
          first_name: userDetails?.first_name,
        },
        comments: requestDetails.comments,
        updatedBy: userDetails?._id,
      };
      console.log(requestData);
      dispatch(
        updateUserProfile({ id: requestDetails._id, input: requestData })
      );
    }
    setOpen(true);
  }

  const navigate = useNavigate();

  const routeUrl = () => {
    navigate("/requestList");
  };
  return (
    <>
      <div className="container">
        <div className="container pt-3">
          <div className="row pb-2">
            <div className="col-sm-8 col-md-8 col-8 p-0">
              <h4>Request Form</h4>
            </div>
            <div className="col-sm-4 col-md-4 col-4 text-end p-0">
              <Button variant="outlined" onClick={routeUrl}>
                Back
              </Button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg text-black p-3 mb-3">
          <form onSubmit={handleSubmit(formData)} className="container pb-3">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  type="text"
                  label="Enagagement Manager"
                  variant="outlined"
                  size="small"
                  {...register("engagementManager")}
                  disabled
                />
                <small className="text-danger">
                  {errors.engagementManager && errors.engagementManager.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="accountName"
                  rules={registerOptions.accountName}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      freeSolo
                      limitTags={1}
                      id="accountName"
                      options={suggestions.accountNameSuggestions}
                      defaultValue={requestDetails.accountName}
                      getOptionLabel={(option) => option}
                      onChange={(event, item) => {
                        onChange(item);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          size="small"
                          label="Account Name"
                        />
                      )}
                      disabled={
                        Object.keys(requestDetails).length !== 0 && !isAdmin
                      }
                    />
                  )}
                />
                <small className="text-danger">
                  {errors.accountName && errors.accountName.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Client Partner"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("clientPartner", registerOptions.clientPartner)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.clientPartner && errors.clientPartner.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Practice name"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("practiceName", registerOptions.practiceName)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.practiceName && errors.practiceName.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Sub practice name"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("subPractice")}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Sub sub practice name"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("subSubPractice")}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="positionType">Position type</InputLabel>
                  <Controller
                    name="positionType"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="positionType"
                        label="Position type"
                        onChange={(event) => {
                          setValue("positionType", event.target.value);
                        }}
                      >
                        <MenuItem value={"billable"}>Billable</MenuItem>
                        <MenuItem value={"buffer"}>Buffer</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <small className="text-danger">
                  {errors.positionType && errors.positionType.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Duration"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register("duration", registerOptions.duration)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.duration && errors.duration.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Cost rate cap"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register("costRateCap", registerOptions.costRateCap)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.costRateCap && errors.costRateCap.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="tentativeBillingStartDate"
                  rules={registerOptions.tentativeBillingStartDate}
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Tentative billing start date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={(event, item: string | undefined) => {
                          onChange(item as string);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            {...register(
                              "tentativeBillingStartDate",
                              registerOptions.tentativeBillingStartDate
                            )}
                            disabled={
                              Object.keys(requestDetails).length !== 0 &&
                              !isAdmin
                            }
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                <small className="text-danger">
                  {errors.tentativeBillingStartDate &&
                    errors.tentativeBillingStartDate.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Number of positions"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register(
                    "numberOfPositions",
                    registerOptions.numberOfPositions
                  )}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.numberOfPositions && errors.numberOfPositions.message}
                </small>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Role"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("role", registerOptions.role)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.role && errors.role.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="status">Location</InputLabel>
                  <Controller
                    name="location"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="status"
                        label="Status"
                        onChange={(event) => {
                          setValue("location", event.target.value);
                        }}
                      >
                        <MenuItem value={"gurugram"}>Gurugram</MenuItem>
                        <MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
                        <MenuItem value={"pune"}>Pune</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <small className="text-danger">
                  {errors.location && errors.location.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Experience"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register("experience", registerOptions.experience)}
                  disabled={
                    Object.keys(requestDetails).length !== 0 && !isAdmin
                  }
                />
                <small className="text-danger">
                  {errors.experience && errors.experience.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="skillSet"
                  rules={registerOptions.skillSet}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      limitTags={3}
                      id="skillSet"
                      options={suggestions.skillSuggestions}
                      getOptionLabel={(option) => option}
                      onChange={(event, item) => {
                        onChange(item);
                      }}
                      defaultValue={requestDetails.skillSet}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          size="small"
                          label="Skill set"
                        />
                      )}
                      disabled={
                        Object.keys(requestDetails).length !== 0 && !isAdmin
                      }
                    />
                  )}
                />
                <small className="text-danger">
                  {errors.skillSet && errors.skillSet.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="client-interview">
                    Client interview
                  </InputLabel>
                  <Controller
                    name="clientInterivew"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="client-interview"
                        label="clientInterivew"
                        onChange={(event) => {
                          setValue("clientInterivew", event.target.value);
                        }}
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <small className="text-danger">
                  {errors.clientInterivew && errors.clientInterivew.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="requestDateToPractice"
                  rules={registerOptions.requestDateToPractice}
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Request date to practice"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={(event, item: string | undefined) => {
                          onChange(item as string);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            {...register(
                              "requestDateToPractice",
                              registerOptions.requestDateToPractice
                            )}
                            disabled={
                              Object.keys(requestDetails).length !== 0 &&
                              (!isAdmin || requestDetails._id)
                                ? true
                                : false
                            }
                            inputProps={{
                              ...params.inputProps,
                              readOnly:
                                Object.keys(requestDetails).length !== 0 &&
                                (!isAdmin || requestDetails._id)
                                  ? true
                                  : false,
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                <small className="text-danger">
                  {errors.requestDateToPractice &&
                    errors.requestDateToPractice.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="requestDateToHiring"
                  rules={registerOptions.requestDateToHiring}
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="requestDateToHiring"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={(event, item: string | undefined) => {
                          onChange(item as string);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            {...register(
                              "requestDateToHiring",
                              registerOptions.requestDateToHiring
                            )}
                            disabled={
                              Object.keys(requestDetails).length !== 0 &&
                              (!isAdmin || requestDetails._id)
                                ? true
                                : false
                            }
                            inputProps={{
                              ...params.inputProps,
                              readOnly:
                                Object.keys(requestDetails).length !== 0 &&
                                (!isAdmin || requestDetails._id)
                                  ? true
                                  : false,
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                <small className="text-danger">
                  {errors.requestDateToHiring &&
                    errors.requestDateToHiring.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Days open"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register("daysOpen")}
                  disabled
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Number of positions offered"
                  type="number"
                  variant="outlined"
                  defaultValue={0}
                  size="small"
                  {...register(
                    "numberOfPositionsOffered",
                    registerOptions.numberOfPositionsOffered
                  )}
                />
                <small className="text-danger">
                  {errors.numberOfPositionsOffered &&
                    errors.numberOfPositionsOffered.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  label="Number of positions full filled"
                  type="number"
                  variant="outlined"
                  size="small"
                  {...register(
                    "numberOfPositionsFullfilled",
                    registerOptions.numberOfPositionsFullfilled
                  )}
                />
                <small className="text-danger">
                  {errors.numberOfPositionsFullfilled &&
                    errors.numberOfPositionsFullfilled.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Interview status
                  </InputLabel>
                  <Controller
                    name="interviewStatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="demo-simple-select-label"
                        label="Interview status"
                        onChange={(event) => {
                          setValue("interviewStatus", event.target.value);
                        }}
                      >
                        <MenuItem value={"selected"}>Selected</MenuItem>
                        <MenuItem value={"pending"}>Pending</MenuItem>
                        <MenuItem value={"scheduled"}>Scheduled</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <small className="text-danger">
                  {errors.interviewStatus && errors.interviewStatus.message}
                </small>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="client-interview">Status</InputLabel>
                  <Controller
                    name="status"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="status"
                        label="Status"
                        onChange={(event) => {
                          setValue("status", event.target.value);
                        }}
                      >
                        <MenuItem value={"open"}>Open</MenuItem>
                        <MenuItem value={"close"}>Close</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <small className="text-danger">
                  {errors.status && errors.status.message}
                </small>
              </div>

              {Object.keys(requestDetails).length !== 0 && (
                <div className="form-group col-sm-12 col-md-12 col-12">
                  <label className="control-label fw-bold">comments:</label>
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
                        {(requestDetails.comments as Comments[])?.map(
                          (r, z) => {
                            return (
                              <tr key={z}>
                                <th scope="row">{z + 1}</th>
                                <td>{(r as Comments).author.first_name}</td>
                                <td>{(r as Comments).createdAt}</td>
                                <td>{(r as Comments).comment}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              <div className="col-xs-12 col-sm-12 col-md-12 my-2">
                <TextField
                  className="w-100"
                  label="Comment"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={4}
                  size="small"
                  {...register("newComment", registerOptions.newComment)}
                />
                <small className="text-danger">
                  {errors.newComment && errors.newComment.message}
                </small>
              </div>
            </div>
            <div className="text-center">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <MessageModal
        open={open}
        title={"Messaage"}
        description={"updated successfully"}
        onSubmit={function (value: boolean): void {
          console.log("hey i am clicked", value);
          setOpen(false);
          routeUrl();
        }}
        saveLabel={"Ok"}
      />
    </>
  );
}

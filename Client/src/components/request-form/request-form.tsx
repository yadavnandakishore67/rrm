import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocation, useNavigate } from "react-router";
import './request-form.scss'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import { Dayjs } from 'dayjs';

import { useDispatch, useSelector } from "react-redux";
import { createUserProfile } from "../../store/backend.action";
import { State } from "../../store/state";
import { IFormInput } from "../../utils/types";



const skills = ["Java", "Python", "Javascript", "Angular", "React"];

export default function RequestForm() {

	const dispatch = useDispatch<any>()
	
	const userDetails = useSelector((state: State) => state.userDetails);

  React.useEffect(() => {
    console.log("requestDetails==>",userDetails?._id)
  }, [userDetails]);

  const location = useLocation();

  const profileDetails = location?.state?.details ? location.state.details : {};

  let {
    register,
    handleSubmit,
    formState: { errors },
    control 
  } = useForm<IFormInput>();

  const registerOptions = {
    accountName: { required: "account Name is required" },
    engagementManager: { required: "engagement manager is required" },
    clientPartner: { required: "client partner is required" },
    role: { required: "role is required" },
    daysPassed: { required: "days passed is required" },
    experience: { required: "experience is required" },
    costRateCap: { required: "costRateCap is required" },
    skillSet: { required: "skillSet is required" },
    practiceName: { required: "practiceName is required" },
    subPractice: { required: "subPractice is required" },
    subSubPractice: { required: "subSubPractice is required" },
    positionType: { required: "positionType is required" },
    location: { required: "location is required" },
    duration: { required: "duration is required" },
    daysOpen: { required: "daysOpen is required" },
    numberOfPositions: { required: "numberOfPositions is required" },
    numberOfPositionsFullfilled: { required: "numberOfPositionsFullfilled is required" },
    numberOfPositionsOffered: { required: "numberOfPositionsOffered is required" },
    interviewStatus: { required: "interviewStatus is required" },
    status: { required: "status is required" },
    tentativeBillingStartDate: { required: "tentativeBillingStartDate is required" },
    requestDateToPractice: { required: "requestDateToPractice is required" },
    requestDateToHiring: { required: "requestDateToHiring is required" },
    clientInterivew: { required: "clientInterivew is required" },
    comments: { required: "comment is required" },
  };

  function formData(data: IFormInput) {
    console.log(data);

    if(userDetails && userDetails?._id){
      const requestData:any ={
        ...data,
        engagementManager:{_id:userDetails?._id,first_name:userDetails.first_name},
        comments:[{author:{_id:userDetails?._id,first_name:userDetails.first_name},comment:data.comments, createdAt: new Date().toLocaleString()}],
        createdBy:userDetails?._id
      }
      console.log(requestData)
      dispatch(createUserProfile(requestData))
    }
  }

  const navigate = useNavigate();
  const [tentativeBillingStartDate, setTentativeBillingStartDate] = React.useState<Dayjs | null>(null);
  const [requestDateToPractice, setRequestDateToPractice] = React.useState<Dayjs | null>(null);
  const [requestDateToHiring, setRequestDateToHiring] = React.useState<Dayjs | null>(null);

  
  const routeUrl = () => {
    navigate('/requestList')
  }
  return (
    <div className="card bg-white shadow-lg text-black">
      <div className="container pt-3">
        <div className="row pb-2">
          <div className="col-sm-8 col-md-8 col-8">
            <h4 >Request Form</h4>
          </div>
          <div className="col-sm-4 col-md-4 col-4 text-end">
            <Button variant="outlined" onClick={routeUrl} >
              Back
            </Button>
          </div>
        </div>
      </div>

      <form className="container p-4" onSubmit={handleSubmit(formData)}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Account Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("accountName", registerOptions.accountName)}
            />
            <small className="text-danger">
              {errors.accountName && errors.accountName.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              type="text"
              label="Enagagement Manager"
              variant="outlined"
              size="small"
              {...register("engagementManager", registerOptions.engagementManager)}
            />
            <small className="text-danger">
              {errors.engagementManager && errors.engagementManager.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Client Partner"
              type="text"
              variant="outlined"
              size="small"
              {...register("clientPartner", registerOptions.clientPartner)}
            />
            <small className="text-danger">
              {errors.clientPartner && errors.clientPartner.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Role"
              type="text"
              variant="outlined"
              size="small"
              {...register("role", registerOptions.role)}
            />
            <small className="text-danger">
              {errors.role && errors.role.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <Controller
              control={control}
              name="skillSet"
              rules={registerOptions.skillSet}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  limitTags={1}
                  id="skillSet"
                  options={skills}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      label="Skill set"
                    />
                  )}
                  onChange={(_, data) => {
                    onChange(data);
                    return data;
                  }}
                />
              )}
            />
            <small className="text-danger">
              {errors.skillSet && errors.skillSet.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Experience"
              type="number"
              variant="outlined"
              size="small"
              {...register("experience", registerOptions.experience)}
            />
            <small className="text-danger">
              {errors.experience && errors.experience.message}
            </small>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Practice name"
              type="text"
              variant="outlined"
              size="small"
              {...register("practiceName", registerOptions.practiceName)}
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
              {...register("subPractice", registerOptions.subPractice)}
              value={profileDetails?.subPractice}
            />
            <small className="text-danger">
              {errors.subPractice && errors.subPractice.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Sub sub practice name"
              type="text"
              variant="outlined"
              size="small"
              {...register("subSubPractice", registerOptions.subSubPractice)}
              value={profileDetails?.subSubPractice}
            />
            <small className="text-danger">
              {errors.subSubPractice && errors.subSubPractice.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositions", registerOptions.numberOfPositions)}
              value={profileDetails?.numberOfPositions}
            />
            <small className="text-danger">
              {errors.numberOfPositions && errors.numberOfPositions.message}
            </small>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions offered"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositionsOffered", registerOptions.numberOfPositionsOffered)}
              value={profileDetails?.numberOfPositionsOffered}
            />
            <small className="text-danger">
              {errors.numberOfPositionsOffered && errors.numberOfPositionsOffered.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions full filled"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositionsFullFilled", registerOptions.numberOfPositionsFullfilled)}
              value={profileDetails?.numberOfPositionsFullfilled}
            />
            <small className="text-danger">
              {errors.numberOfPositionsFullFilled && errors.numberOfPositionsFullFilled.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Interview status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Interview status"
                {...register("interviewStatus", registerOptions.interviewStatus)}
                value={profileDetails?.interviewStatus}
              >
                <MenuItem value={"selected"}>Selected</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"scheduled"}>Scheduled</MenuItem>
              </Select>
            </FormControl>
            <small className="text-danger">
              {errors.interviewStatus && errors.interviewStatus.message}
            </small>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Cost rate cap"
              type="number"
              variant="outlined"
              size="small"
              {...register("costRateCap", registerOptions.costRateCap)}
              value={profileDetails?.costRateCap}
            />
            <small className="text-danger">
              {errors.costRateCap && errors.costRateCap.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Tentative billing start date"
                value={tentativeBillingStartDate}
                onChange={(newValue) => {
                  setTentativeBillingStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small"
                {...register("tentativeBillingStartDate", registerOptions.tentativeBillingStartDate)}
                   />}
              />
            </LocalizationProvider>
            <small className="text-danger">
              {errors.tentativeBillingStartDate && errors.tentativeBillingStartDate.message}
            </small>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="positionType">Position type</InputLabel>
              <Select
                labelId="positionType"
                label="Position type"
                {...register("positionType", registerOptions.positionType)}
                value={profileDetails?.positionType}
              >
                <MenuItem value={"billable"}>Billable</MenuItem>
                <MenuItem value={"buffer"}>Buffer</MenuItem>
              </Select>
            </FormControl>
            <small className="text-danger">
              {errors.positionType && errors.positionType.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="location">Location</InputLabel>
              <Select
                labelId="location"
                label="Location"
                {...register("location", registerOptions.location)}
                value={profileDetails?.location}
              >
                <MenuItem value={"gurugram"}>Gurugram</MenuItem>
                <MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
                <MenuItem value={"pune"}>Pune</MenuItem>
              </Select>
            </FormControl>
            <small className="text-danger">
              {errors.location && errors.location.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Request date to practice"
                value={requestDateToPractice}
                onChange={(newValue) => {
                  setRequestDateToPractice(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small"
                  {...register("requestDateToPractice", registerOptions.requestDateToPractice)} />}
              />
            </LocalizationProvider>
            <small className="text-danger">
              {errors.requestDateToPractice && errors.requestDateToPractice.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Duration"
              type="text"
              variant="outlined"
              size="small"
              {...register("duration", registerOptions.duration)}
              value={profileDetails?.duration}
            />
            <small className="text-danger">
              {errors.duration && errors.duration.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                label="Status"
                {...register("status", registerOptions.status)}
                value={profileDetails?.status}
              >
                <MenuItem value={"open"}>Open</MenuItem>
                <MenuItem value={"close"}>Close</MenuItem>
              </Select>
            </FormControl>
            <small className="text-danger">
              {errors.status && errors.status.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Days open"
              type="number"
              variant="outlined"
              size="small"
              {...register("daysOpen", registerOptions.daysOpen)}
              value={profileDetails?.daysOpen}
            />
            <small className="text-danger">
              {errors.daysOpen && errors.daysOpen.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Days passed"
              type="number"
              variant="outlined"
              size="small"
              {...register("daysPassed", registerOptions.daysPassed)}
              value={profileDetails?.daysPassed}
            />
            <small className="text-danger">
              {errors.daysPassed && errors.daysPassed.message}
            </small>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Request date to hiring"
                value={requestDateToHiring}
                onChange={(newValue) => {
                  setRequestDateToHiring(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small"
                  {...register("requestDateToHiring", registerOptions.requestDateToHiring)}
                />}
              />
            </LocalizationProvider>
            <small className="text-danger">
              {errors.requestDateToHiring && errors.requestDateToHiring.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="client-interview">Client interview</InputLabel>
              <Select
                labelId="client-interview"
                label="clientInterivew"
                {...register("clientInterivew", registerOptions.clientInterivew)}
                value={profileDetails?.clientInterivew}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </FormControl>
            <small className="text-danger">
              {errors.clientInterivew && errors.clientInterivew.message}
            </small>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 my-2">
            <TextField
              className="w-100"
              label="Comments"
              type="text"
              variant="outlined"
              multiline
              rows={4}
              size="small"
              {...register("comments", registerOptions.comments)}
              value={profileDetails?.comments}
            />
            <small className="text-danger">
              {errors.comments && errors.comments.message}
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
  );
}
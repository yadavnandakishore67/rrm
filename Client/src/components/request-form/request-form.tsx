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

interface IFormInput {
  role: string;
  accountName: string;
  engagementManager: string;
  clientPartner: string;
  tentativeBillingStartDate: string;
  daysPassed: number;
  skillSet: string[];
  experience: number;
  costRateCap: number;
  practiceName: string;
  subPractice: string;
  subSubPractice: string;
  numberOfPositions: number;
  positionType: string;
  location: string;
  requestDateToPractice: string;
  duration: number;
  requestDateToHiring: string;
  daysOpen: string;
  numberOfPositionsFullFilled: number;
  numberOfPositionsOffered: string;
  interviewStatus: string;
  status: string;
  clientInterivew: string;
  comments: string;
}

const skills = ["Java", "Python", "Javascript", "Angular", "React"];

export default function RequestForm() {

  const location = useLocation();

  const profileDetails = location?.state?.details ? location.state.details : {};

  let {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<IFormInput>();

  function formData(data: IFormInput) {
    console.log(data);
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
              {...register("accountName", {
                required: true,
              })}
              value={profileDetails?.accountName}
            />
            {errors.accountName?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              type="text"
              label="Enagagement Manager"
              variant="outlined"
              size="small"
              {...register("engagementManager", {
                required: true,
              })}
              value={profileDetails?.enagagementManager}
            />
            {errors.engagementManager?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Client Partner"
              type="text"
              variant="outlined"
              size="small"
              {...register("clientPartner", {
                required: true,
              })}
              value={profileDetails?.clientPartner}
            />
            {errors.clientPartner?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Role"
              type="text"
              variant="outlined"
              size="small"
              {...register("role", {
                required: true,
              })}
              value={profileDetails?.role}
            />
            {errors.role?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <Controller
              control={control}
              name="skillSet"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  limitTags={1}
                  id="skillSet"
                  options={skills}
                  value={profileDetails.skillSet}
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
            {errors.skillSet && <p>This field is required</p>}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Experience"
              type="number"
              variant="outlined"
              size="small"
              {...register("experience", {
                required: true,
              })}
              value={profileDetails?.experience}
            />
            {errors.experience && <p>This field is required</p>}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Practice name"
              type="text"
              variant="outlined"
              size="small"
              {...register("practiceName", {
                required: true,
              })}
              value={profileDetails?.practiceName}
            />
            {errors.practiceName?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Sub practice name"
              type="text"
              variant="outlined"
              size="small"
              {...register("subPractice", {
                required: true,
              })}
              value={profileDetails?.subPractice}
            />
            {errors.subPractice?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Sub sub practice name"
              type="text"
              variant="outlined"
              size="small"
              {...register("subSubPractice", {
                required: true,
              })}
              value={profileDetails?.subSubPractice}
            />
            {errors.subSubPractice?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositions", {
                required: true,
              })}
              value={profileDetails?.numberOfPositions}
            />
            {errors.numberOfPositions?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions offered"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositionsOffered", {
                required: true,
              })}
              value={profileDetails?.numberOfPositionsOffered}
            />
            {errors.numberOfPositionsOffered?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Number of positions full filled"
              type="number"
              variant="outlined"
              size="small"
              {...register("numberOfPositionsFullFilled", {
                required: true,
              })}
              value={profileDetails?.numberOfPositionsFullfilled}
            />
            {errors.numberOfPositionsFullFilled?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Interview status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Interview status"
                {...register("interviewStatus", { required: true })}
                value={profileDetails?.interviewStatus}
              >
                <MenuItem value={"selected"}>Selected</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"scheduled"}>Scheduled</MenuItem>
              </Select>
            </FormControl>
            {errors.interviewStatus?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Cost rate cap"
              type="number"
              variant="outlined"
              size="small"
              {...register("costRateCap", {
                required: true,
              })}
              value={profileDetails?.costRateCap}
            />
            {errors.costRateCap && <p>This field is required</p>}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Tentative billing start date"
                value={profileDetails.tentativeBillingStartDate ? profileDetails.tentativeBillingStartDate : tentativeBillingStartDate}
                onChange={(newValue) => {
                  setTentativeBillingStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                  {...register("tentativeBillingStartDate", {
                    required: true,
                  })} />}
              />
            </LocalizationProvider>
            {errors.tentativeBillingStartDate?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="positionType">Position type</InputLabel>
              <Select
                labelId="positionType"
                label="Position type"
                {...register("positionType", { required: true })}
                value={profileDetails?.positionType}
              >
                <MenuItem value={"billable"}>Billable</MenuItem>
                <MenuItem value={"buffer"}>Buffer</MenuItem>
              </Select>
            </FormControl>
            {errors.positionType?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="location">Location</InputLabel>
              <Select
                labelId="location"
                label="Location"
                {...register("location", { required: true })}
                value={profileDetails?.location}
              >
                <MenuItem value={"gurugram"}>Gurugram</MenuItem>
                <MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
                <MenuItem value={"pune"}>Pune</MenuItem>
              </Select>
            </FormControl>
            {errors.location?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Request date to practice"
                value={profileDetails.requestDateToPractice ? profileDetails.requestDateToPractice : requestDateToPractice}
                onChange={(newValue) => {
                  setRequestDateToPractice(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                  {...register("requestDateToPractice", {
                    required: true,
                  })} />}
              />
            </LocalizationProvider>
            {errors.requestDateToPractice?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Duration"
              type="text"
              variant="outlined"
              size="small"
              {...register("duration", {
                required: true,
              })}
              value={profileDetails?.duration}
            />
            {errors.duration && <p>This field is required</p>}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                label="Status"
                {...register("status", { required: true })}
                value={profileDetails?.status}
              >
                <MenuItem value={"open"}>Open</MenuItem>
                <MenuItem value={"close"}>Close</MenuItem>
              </Select>
            </FormControl>
            {errors.status?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Days open"
              type="number"
              variant="outlined"
              size="small"
              {...register("daysOpen", {
                required: true,
              })}
              value={profileDetails?.daysOpen}
            />
            {errors.daysOpen?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Days passed"
              type="number"
              variant="outlined"
              size="small"
              {...register("daysPassed", {
                required: true,
              })}
              value={profileDetails?.daysPassed}
            />
            {errors.daysPassed?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Request date to hiring"
                value={profileDetails.requestDateToHiring ? profileDetails.requestDateToHiring : requestDateToHiring}
                onChange={(newValue) => {
                  setRequestDateToHiring(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                  {...register("requestDateToHiring", {
                    required: true,
                  })}
                />}
              />
            </LocalizationProvider>
            {errors.requestDateToPractice?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="client-interview">Client interview</InputLabel>
              <Select
                labelId="client-interview"
                label="Client interview"
                {...register("clientInterivew", { required: true })}
                value={profileDetails?.clientInterivew ? 'yes' : 'no'}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </FormControl>
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
              {...register("comments")}
              value={profileDetails?.comments}
            />
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
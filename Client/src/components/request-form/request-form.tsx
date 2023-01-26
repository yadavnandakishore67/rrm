import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocation, useNavigate } from "react-router";
import './request-form.scss'
import { useDispatch, useSelector } from "react-redux";
import { getRequestedUserProfile } from "../../store/backend.action";
import React from "react";
import { State } from "../../store/state";

interface IFormInput {
  role: string;
  accountName: string;
  engagementManager: string;
  clientPartner: string;
  tentativeBillingStartDate: string;
  daysPassed: number;
  skillSet: string;
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
  clientInterview: string;
  comments: string;
}

const skills = ["Java", "Python", "Javascript", "Angular", "React"];

export default function RequestForm() {

  const dispatch = useDispatch<any>()

  const requestDetails = useSelector((state: State) => state.requestDetails);

  const location = useLocation();

  React.useEffect(() => {
    console.log(requestDetails)
  }, [requestDetails]);

  React.useEffect(() => {
    dispatch(getRequestedUserProfile(location.state.userName))
  }, []);
  
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  function formData(data: IFormInput) {
    console.log(data);
  }

  const navigate = useNavigate();
  const routeUrl = () => {
    navigate('/requestList')
  }
  return (
    <div className="card bg-white shadow-lg text-black">
      <div className="container pt-3 text-end">
        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-12 my-2">
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
              value={requestDetails?.accountName}
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
              value={requestDetails?.enagagementManager}
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
              value={requestDetails?.clientPartner}
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
                pattern: /^[A-Za-z]+$/i,
              })}
              value={requestDetails?.role}
            />
            {errors.role?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <Stack>
              <Autocomplete
                multiple
                limitTags={1}
                size="small"
                options={skills}
                freeSolo
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                      
                    />
                  ))
                }
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    {...register("skillSet")}
                    variant="outlined"
                    label="Skill set"
                    placeholder="Favorites"
                  />
                )}
              />
            </Stack>
            {errors.skillSet?.type === "required" && (
              <p>This field is required</p>
            )}
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
              value={requestDetails?.experience}
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
              value={requestDetails?.practiceName}
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
              value={requestDetails?.subPractice}
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
            />
            {errors.subSubPractice?.type === "required" && (
              <p>This field is required</p>
            )}
            value={requestDetails?.subSubPractice}
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
              value={requestDetails?.numberOfPositions}
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
              value={requestDetails?.numberOfPositionsOffered}
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
              value={requestDetails?.numberOfPositionsFullfilled}
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
                value={requestDetails?.interviewStatus}
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
              value={requestDetails?.costRateCap}
            />
            {errors.costRateCap && <p>This field is required</p>}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Tentative billing start date"
              type="Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              {...register("tentativeBillingStartDate", {
                required: true,
              })}
              value={requestDetails?.tentativeBillingStartDate}
            />
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
                value={requestDetails?.positionType}
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
                value={requestDetails?.location}
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
            <TextField
              label="Request date to practice"
              type="Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              {...register("requestDateToPractice", {
                required: true,
              })}
              value={requestDetails?.requestDateToPractice}
            />
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
                value={requestDetails?.status}
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
              value={requestDetails?.daysOpen}
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
              value={requestDetails?.daysPassed}
            />
            {errors.daysPassed?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <TextField
              label="Request date to hiring"
              type="Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              {...register("requestDateToHiring", {
                required: true,
              })}
            />
            {errors.requestDateToPractice?.type === "required" && (
              <p>This field is required</p>
            )}
            value={requestDetails?.requestDateToPractice}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-2">
            <FormControl fullWidth className="select-input" size="small">
              <InputLabel id="client-interview">Client interview</InputLabel>
              <Select
                labelId="client-interview"
                label="Client interview"
                {...register("clientInterview", { required: true })}
                value={requestDetails?.clientInterivew}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </FormControl>
            {errors.clientInterview?.type === "required" && (
              <p>This field is required</p>
            )}
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
              value={requestDetails?.comments}
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
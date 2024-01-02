import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "./employeeForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { Employee, State } from "../../store/state";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MessageModal from "../../common/message-modal";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Roles } from "../../utils/types";
import {
  createEmployee,
  getSuggestions,
  updateEmployee,
} from "../../store/backend.action";

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<Employee>();
  const [open, setOpen] = useState<boolean>(false);
  let updatedEmployeeData: any = {};
  const dispatch = useDispatch<any>();

  const location = useLocation();
  updatedEmployeeData = location?.state?.details ? location.state.details : {};
  const updatedEmployeeId =
    location?.state?.details && location.state.details._id;

  const suggestions = useSelector((state: State) => state.suggestions);

  const isAdmin = useSelector(
    (state: State) => state.userDetails?.role.name === Roles.admin
  );
  const employeeFields = [
    "empId",
    "empName",
    "experience",
    "role",
    "skills",
    "practice",
    "reportingManager",
    "billingStatus",
  ];

  const registerOptions = {
    empId: { required: "Employee id required" },
    empName: { required: "Employee name is required" },
    experience: { required: "Experience is required" },
    skills: { required: "skills is required" },
  };

  useEffect(() => {
    employeeFields.forEach((field: any) =>
      setValue(field, updatedEmployeeData[field])
    );
  }, [updatedEmployeeData]);

  function formData(data: any) {
    if (Object.keys(updatedEmployeeData).length == 0) {
      dispatch(createEmployee(data));
    } else {
      dispatch(updateEmployee({ id: updatedEmployeeId, input: data }));
    }
    setOpen(true);
  }

  const navigate = useNavigate();

  const routeUrl = () => {
    navigate("/employeesList");
  };

  return (
    <>
      <div className="container employee-form">
        <div className="container pt-3">
          <div className="row pb-2">
            <div className="col-sm-8 col-md-8 col-8 p-0">
              <h4>Employee Form</h4>
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
                  label="Employee Id"
                  variant="outlined"
                  size="small"
                  focused
                  {...register("empId", registerOptions.empId)}
                />
                <small className="text-danger">
                  {errors.empId && errors.empId.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  type="text"
                  label="Employee Name"
                  variant="outlined"
                  size="small"
                  {...register("empName", registerOptions.empName)}
                />
                <small className="text-danger">
                  {errors.empName && errors.empName.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  type="text"
                  label="Experience"
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
                  type="text"
                  label="Role"
                  variant="outlined"
                  size="small"
                  {...register("role")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <Controller
                  control={control}
                  name="skills"
                  rules={registerOptions.skills}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      limitTags={2}
                      id="skills"
                      options={suggestions.skillSuggestions}
                      getOptionLabel={(option) => option}
                      onChange={(event, item) => {
                        onChange(item);
                      }}
                      defaultValue={updatedEmployeeData.skills}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          size="small"
                          label="Skills"
                        />
                      )}
                    />
                  )}
                />
                <small className="text-danger">
                  {errors.skills && errors.skills.message}
                </small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="practice">Practice</InputLabel>
                  <Controller
                    name="practice"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="practice"
                        label="Practice"
                        onChange={(event) => {
                          setValue("practice", event.target.value);
                        }}
                      >
                        <MenuItem value={"App Dev"}>App Dev</MenuItem>
                        <MenuItem value={"Q&A"}>Q&A</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <TextField
                  type="text"
                  label="Reporting Mannager"
                  variant="outlined"
                  size="small"
                  {...register("reportingManager")}
                />
                <small className="text-danger"></small>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 my-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="billingStatus">Billable status</InputLabel>
                  <Controller
                    name="billingStatus"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="billingStatus"
                        label="Billing status"
                        onChange={(event) => {
                          setValue("billingStatus", event.target.value);
                        }}
                      >
                        <MenuItem value={"Billable"}>Billable</MenuItem>
                        <MenuItem value={"Non-Billable"}>Non-Billable</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
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
        description={"New employee details  added successfully"}
        onSubmit={function (value: boolean): void {
          setOpen(false);
          routeUrl();
        }}
        saveLabel={"Ok"}
      />
    </>
  );
}

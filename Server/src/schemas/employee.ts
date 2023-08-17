import mongoose, { Schema } from "mongoose";

const EmployeeSchema: Schema = new Schema({
  empId: {
    type: String,
    required: true,
  },
  empName: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  practice: {
    type: String,
  },
  reportingManager: {
    type: String,
  },
  billingStatus: {
    type: String,
  },
  // empLogo: {
  //   type: String,
  // },
});

const employeeModal = mongoose.model("employee", EmployeeSchema);
export default employeeModal;

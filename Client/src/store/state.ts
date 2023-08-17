import { RequestForm, UserDetails } from "../utils/types";

export const initialState: State = {
  loggedIn: false,
  count: 0,
  requestList: [],
  userLoggedIn: false,
  suggestions: {
    skillSuggestions: [],
    accountNameSuggestions: [],
  },
};

export interface Suggestions {
  skillSuggestions: string[];
  accountNameSuggestions: string[];
}
export interface State {
  loggedIn: boolean;
  userName?: string;
  count: number;
  requestList: RequestForm[];
  requestDetails?: RequestForm;
  userDetails?: UserDetails;
  userLoggedIn: boolean;
  suggestions: Suggestions;
  employeesList?: Employee[];
  employeeDetails?: Employee;
}

export interface Employee {
  empId: string;
  empName: string;
  experience: string;
  role: string;
  skills: string[];
  practice: string;
  reportingManager: string;
  billingStatus: string;
  // empLogo: string;
}

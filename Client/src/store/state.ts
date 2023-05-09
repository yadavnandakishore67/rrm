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
}

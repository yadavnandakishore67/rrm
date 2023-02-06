
export interface Login {
    emp_ID: string,
    password: string
}

export interface UserDetails {
    _id: string,
    emp_ID: string,
    first_name: string,
    last_name: string,
    email: string,
    mobile: number,
    role: Role,
    group: string,
}

export interface RequestForm {
    tentativeBillingStartDate: string,
    _id: string,
    accountName: string,
    clientInterivew: boolean
    clientPartner: string
    comments: Comments[]
    costRateCap: number,
    createdAt: string,
    daysOpen: number
    daysPassed: string,
    engagementManager: User,
    experience: number,
    interviewStatus: string,
    location: string,
    numberOfPositions: number,
    numberOfPositionsFullfilled: number,
    numberOfPositionsOffered: number
    positionType: string,
    practiceName: string,
    subPractice: string,
    subSubPractice: string,
    requestDateToHiring: string,
    requestDateToPractice: string,
    role: string,
    skillSet: string[],
    status: string
}

export interface Role {
    _id: string,
    name: Roles
}
export enum Roles {
    admin = 'Admin',
    hiring = 'Hiring',
    default = 'Default'
}
export interface Comments {
    author: User,
    comment: string,
    createdAt: string
}

export interface User {
    _id: string,
    first_name: string
}

export interface IFormInput {
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
    numberOfPositionsFullfilled: number;
    numberOfPositionsOffered: string;
    interviewStatus: string;
    status: string;
    clientInterivew: string;
    comments: Comments[];
    createdBy: string;
    newComment:string;
    updatedBy:string;
}


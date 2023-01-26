
export interface Login {
    emp_ID: string,
    password: string
}

export interface UserDetails {
    emp_ID: string,
    first_name: string,
    last_name: string,
    email: string,
    mobile: number,
    role: string,
    group: string,
}

export interface RequestForm {
    tentativeBillingStartDate: string,
    _id: string,
    accountName: string,
    clientInterivew: boolean
    clientPartner: string
    comments: string
    costRateCap: number,
    createdAt: string,
    daysOpen: number
    daysPassed: string,
    enagagementManager: string,
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
    status:string
}
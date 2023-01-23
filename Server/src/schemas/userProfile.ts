import mongoose, { model, Schema } from "mongoose"

const UserProfileSchema: Schema = new Schema(
    {
        accountName: {
            type: String,
            required: true,
        },
        enagagementManager: {
            type: String,
            required: true
        },
        clientPartner: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        tentativeBillingStartDate: {
            type: Date,
            required: true,
        },

        daysPassed: {
            type: String,
        },

        skillSet: {
            type: Array<String>,
            required: true,
        },
        experience: {
            type: Number,
            required:true
        },
        costRateCap: {
            type: Number,
            required: true
        },
        practiceName: {
            type: String,
            required: true
        },
        subPractice: {
            type: String,
            required: true
        },
        subSubPractice: {
            type: String
        },
        numberOfPositions: {
            type: Number,
            default: 1
        },
        positionType: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        requestDateToPractice: {
            type: Date
        },
        Duration: {
            type: Number
        },
        requestDateToHiring: {
            type: Date
        },
        daysOpen: {
            type: Number
        },
        numberOfPositionsFullfilled: {
            type: Number
        },
        numberOfPositionsOffered: {
            type: Number
        },
        interviewStatus :{
            type: String
        },
        status: {
            type: String
        },
        clientInterivew: {
            type: Boolean
        },
        comments: {
            type: Array<String>
        }
    },
    { timestamps: true }
)


const userProfileModal = mongoose.model("UsersProfile", UserProfileSchema);

export default userProfileModal;
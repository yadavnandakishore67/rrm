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
            default: () => new Date()
        },

        daysPassed: {
            type: String,
        },

        skillSet: {
            type: [String],
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
            type: Date,
            default: () => new Date()
        },
        duration: {
            type: Number
        },
        requestDateToHiring: {
            type: Date,
            default: () => new Date()
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
            type: Boolean,
            default:false
        },
        comments: {
            type: [String]
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref:'User'
        }
    }
)


const userProfileModal = mongoose.model("UsersProfile", UserProfileSchema);

export default userProfileModal;
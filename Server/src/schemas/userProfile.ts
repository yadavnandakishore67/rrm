import mongoose, { model, Schema } from "mongoose"

const UserProfileSchema: Schema = new Schema(
    {
        accountName: {
            type: String,
            required: true,
        },
        enagagementManager: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
            default: () => new Date().toLocaleDateString()
        },
        daysPassed: {
            type: Number,  //TODO: calculation --  Virtuals
            default: 0
        },
        skillSet: [
            {
            type: String
            }
        ],
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
            type: String,
            default: () => new Date().toLocaleDateString()
        },
        duration: {
            type: Number
        },
        requestDateToHiring: {
            type: String,
            default: () => new Date().toLocaleDateString()
        },
        daysOpen: {
            type: Number,   //TODO: calculation
            default:0
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
            type: String   // active, freeze, close, rejected, ....
        },
        clientInterivew: {
            type: Boolean,
            default:false
        },
        comments:[{
            author: {
                type: Schema.Types.ObjectId,
                ref:'User'
            },
            comment:{
                type:String
            }
        }],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref:'User'
        }
    },
    { timestamps:true }
)


const userProfileModal = mongoose.model("UsersProfile", UserProfileSchema);

export default userProfileModal;
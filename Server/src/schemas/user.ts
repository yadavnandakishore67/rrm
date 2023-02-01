import mongoose, { model, Schema } from "mongoose"

const UserSchema: Schema = new Schema(
    {
        emp_ID: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref:'Role',
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)


const userModal = mongoose.model("User", UserSchema);
export default  userModal;

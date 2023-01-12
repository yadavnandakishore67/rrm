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
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

//export default model<ILogin>("Users", UserSchema);
const userModal = mongoose.model("Users", UserSchema);
//export default = userModal;
module.exports = userModal;
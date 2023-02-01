import mongoose, { model, Schema, SchemaType } from "mongoose"

const RolesSchema: Schema = new Schema(
    {
        name: {
            type: String,
            require: true
        }

    }
)

const roleModal = mongoose.model("Role", RolesSchema);
export default roleModal;

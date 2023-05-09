import mongoose, { model, Schema, SchemaType } from "mongoose";

const suggestionsSchema: Schema = new Schema({
  skillSuggestions: [
    {
      type: String,
    },
  ],
  accountNameSuggestions: [
    {
      type: String,
    },
  ],
});

const suggestionsModal = mongoose.model("suggestions", suggestionsSchema);
export default suggestionsModal;

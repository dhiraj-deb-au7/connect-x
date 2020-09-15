import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },

    lastName: {
      type: String,
      minlength: 3,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Users", userSchema);

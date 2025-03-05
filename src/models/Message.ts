import { Message } from "@/lib/types";
import { Schema, model, models } from "mongoose";

const messageSchema = new Schema<Message>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [500, "Message cannot be more than 500 characters"],
    },
  },
  {
    timestamps: true,
  },
);

export default models.Message || model<Message>("Message", messageSchema);

import { model, Schema } from "mongoose";

const messageSchema = new Schema({
  message: {
    type: String,
  },
  user: {
    type: String,
  },
});

export const Message = model("Message", messageSchema);

import mongoose from "mongoose";

let Schema = mongoose.schema;

let NotificationSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String
  }, 
  receiver: {
    id: String,
    username: String,
    avatar: String
  }, 
  type: String,
  content: String,
  isRead: {type: Boolean, default: false},
  createdAt: {type: Number, default: Date.now},
});

module.exports = mongoose.model("notification", NotificationSchema); 
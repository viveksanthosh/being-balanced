import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: [
    {
      type: Schema.ObjectId,
      required: true,
    },
  ],
});

const RolesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  resources: [
    {
      type: Schema.ObjectId,
      required: true,
    },
  ],
});

const ResourcesSchema = new Schema({
  resource: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["user", "admin", "editor"] },
});

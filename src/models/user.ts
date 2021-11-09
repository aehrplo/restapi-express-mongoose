import { model, Schema } from "mongoose";
import { UserTypeValues } from "../types";
import { User } from "../interfaces";

const userSchema = new Schema<User>({});

const UserModel = model<User>("User", userSchema);

export { userSchema, UserModel };

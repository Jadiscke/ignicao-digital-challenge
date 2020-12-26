import { Schema } from "mongoose";
import db from "../database";
interface users {
  name: string;
  email: string;
  tags: Array<string>;
}
const usersSchema = new Schema({
  name: String,
  email: String,
  tags: [String],
});

const User = db.model("User", usersSchema);

export { usersSchema, users };

export default User;

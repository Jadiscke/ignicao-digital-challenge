import { Schema } from "mongoose";
import db from "../database";
interface tools {
  title: string;
  link: string;
  description: string;
  tags: Array<String>;
}
const toolsSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String],
});

const Tool = db.model("Tool", toolsSchema);

export { toolsSchema, tools };

export default Tool;

import { Mongoose, SchemaDefinition, Schema, SchemaType } from "mongoose";
class Database {
  #db: Mongoose;

  constructor() {
    this.#db = new Mongoose();
  }
  async start(): Promise<void> {
    await this.#db.connect(`${process.env.MONGO_DB_URL}myapp`, {
      useNewUrlParser: true,
    });
  }
  model(modelName: string, schema: Schema) {
    const Model = this.#db.model(modelName, schema);
    return Model;
  }
}

export default new Database();

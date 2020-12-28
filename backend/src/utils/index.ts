import User, { users } from "../model/User";
import { Document } from "mongoose";
import dotenv from "dotenv";
import db from "../database";

const seed = async (user: users): Promise<void> => {
  const userDocument: Document = new User(user);
  try {
    const savedUser = await User.findOne({ name: user.name }).exec();
    if (!savedUser) {
      await userDocument.save();
    }
  } catch (error) {}
};

const init = async (): Promise<void> => {
  const baseUsers: Array<users> = [
    {
      name: "Ana Souza",
      email: "ana@example.com",
      tags: ["aluno", "destaque", "marketing"],
    },
    {
      name: "Marcus Silva",
      email: "marcus.silva@email.com",
      tags: ["aluno", "gestão", "empreendedorismo"],
    },
  ];
  dotenv.config();
  try {
    await db.start();
    for (const user of baseUsers) {
      await seed(user);
    }
  } catch (error) {}
};

export { seed, init };

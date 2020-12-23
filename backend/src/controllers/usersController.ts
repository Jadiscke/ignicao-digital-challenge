import { Request, Response } from "express";
import User, { users } from "../model/User";

class UserController {
  async create(request: Request, response: Response): Promise<Response<any>> {
    try {
      const user: users = request.body;
      const [findUserByTitle, findUserByEmail] = await Promise.all([
        User.find().where({ name: user.name }),
        User.find().where({ email: user.email }),
      ]);
      if (findUserByTitle[0] || findUserByEmail[0]) {
        return response.status(409).json({
          error: `User with ${
            findUserByTitle[0] ? "name " + user.email : "email " + user.email
          } already registered`,
        });
      }
      const newUser = new User(user);
      const newUserID = (await newUser.save()).id;

      return response.status(201).json({ id: newUserID, user: newUser });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async delete(request: Request, response: Response): Promise<Response<any>> {
    const { id } = request.params;
    console.log(request.params);
    try {
      await User.deleteOne({ _id: id });
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async getAll(request: Request, response: Response): Promise<Response<any>> {
    try {
      if (request.query.tag) {
        request.query = {
          ...request.query,
          tags: request.query.tag,
        };
        delete request.query.tag;
      }
      if (request.query?.tags) {
        if (Number(request.query?.tags?.length) > 1) {
          const tags: any = request.query.tags || [""];
          const users = await User.find().where("tags").all(tags);
          return response.status(200).json(users);
        }
      }
      const users = await User.find().where(request.query);
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({
        error: error,
      });
    }
  }
  async updateOne(
    request: Request,
    response: Response
  ): Promise<Response<any>> {
    const { id } = request.params;
    const body = request.body;

    try {
      await User.updateOne({ _id: id }, { ...body });
      console.log("Working!");
      return response.status(204).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({ err });
    }
  }
}

export default new UserController();

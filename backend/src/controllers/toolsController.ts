import { Request, Response } from "express";
import Tool, { tools } from "../model/Tool";

class ToolController {
  async create(request: Request, response: Response): Promise<Response<any>> {
    try {
      const tool: tools = request.body;
      const [findToolByTitle, findToolByLink] = await Promise.all([
        Tool.find().where({ title: tool.title }),
        Tool.find().where({ link: tool.link }),
      ]);
      if (findToolByTitle[0] || findToolByLink[0]) {
        return response.status(409).json({
          error: `Tool with ${
            findToolByTitle[0] ? "title " + tool.title : "link " + tool.link
          } already registered`,
        });
      }
      const newTool = new Tool(tool);
      const newToolID = (await newTool.save()).id;

      return response.status(201).json(newTool);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async delete(request: Request, response: Response): Promise<Response<any>> {
    const { id } = request.params;
    console.log(request.params);
    try {
      await Tool.deleteOne({ _id: id });
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
          const tools = await Tool.find().where("tags").all(tags);
          return response.status(200).json(tools);
        }
      }
      const tools = await Tool.find().where(request.query);
      return response.status(200).json(tools);
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
      await Tool.updateOne({ _id: id }, { ...body });
      return response.status(204);
    } catch (err) {
      console.log(err);
      return response.status(400).json({ err });
    }
  }
}

export default new ToolController();

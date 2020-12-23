import Tool, { tools } from "../model/Tool";
import { Document } from "mongoose";
import dotenv from "dotenv";
import db from "../database";

const seed = async (tool: tools): Promise<void> => {
  const toolDocument: Document = new Tool(tool);
  try {
    const savedTool = await Tool.findOne({ title: tool.title }).exec();
    // console.log("savedTool:   ", savedTool);
    if (!savedTool) {
      await toolDocument.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const init = async (): Promise<void> => {
  const baseTools: Array<tools> = [
    {
      // ou qualquer outro identificador
      title: "Notion",
      link: "https://notion.so",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar",
      ],
    },
    {
      title: "json-server",
      link: "https://github.com/typicode/json-server",
      description:
        "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      tags: ["api", "json", "schema", "node", "github", "rest"],
    },
    {
      title: "fastify",
      link: "https://www.fastify.io/",
      description:
        "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      tags: ["web", "framework", "node", "http2", "https", "localhost"],
    },
  ];
  dotenv.config();
  try {
    await db.start();
    for (const tool of baseTools) {
      await seed(tool);
    }
  } catch (error) {
    console.log(error);
  }
};

export { seed, init };

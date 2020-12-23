import request from "supertest";
import server from "../../src/server";

describe("echo", () => {
  it("should echo the post request", async () => {
    const body = {
      test: "test",
    };

    const response = await request(server).post("/echo").send(body);

    expect(response.body.test).toBe(body.test);
  });
});

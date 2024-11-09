const request = require("supertest");
const app = require("../server");

describe("Finance API", () => {
  it("should create a finance application", async () => {
    const response = await request(app)
      .post("/api/finance")
      .send({
        personalDetails: { name: "John Doe" },
        income: 50000,
        expenses: 10000,
        assets: 30000,
        liabilities: 20000,
      });
    expect(response.statusCode).toBe(201);
  });
});

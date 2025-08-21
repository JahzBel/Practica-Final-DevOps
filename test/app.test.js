const request = require("supertest");
const app = require("../index");

let server;

beforeAll(() => {
  server = app.listen(3001); // puerto de prueba
});

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("Debe responder con Hola Mundo", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hola Mundo");
  });
});

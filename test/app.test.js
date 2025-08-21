const request = require("supertest");
const app = require("../index"); // solo la app, no levantar server

describe("GET /", () => {
  it("Debe responder con Hola Mundo", async () => {
    const res = await request(app).get("/"); // <-- solo app
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hola Mundo");
  });
});

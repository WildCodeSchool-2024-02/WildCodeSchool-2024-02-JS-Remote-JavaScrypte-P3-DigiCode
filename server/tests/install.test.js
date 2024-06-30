const fs = require("node:fs");
const path = require("node:path");
const supertest = require("supertest");

// Test suite for environment installation
describe("Installation", () => {
  // Test: Check if the (server) .env file exists
  test("You have created /server/.env", async () => {
    expect(fs.existsSync(path.join(__dirname, "..", ".env"))).toBe(true);
  });

  // Test: Check if the (server) .env.sample file exists
  test("/server/.env.sample still exists", async () => {
    expect(fs.existsSync(path.join(__dirname, "..", ".env.sample"))).toBe(true);
  });

  // Test: Check if the (client) .env file exists
  test("You have created /client/.env", async () => {
    expect(
      fs.existsSync(path.join(__dirname, "..", "..", "client", ".env"))
    ).toBe(true);
  });

  // Test: Check if the (client) .env.sample file exists
  test("/client/.env.sample still exists", async () => {
    expect(
      fs.existsSync(path.join(__dirname, "..", "..", "client", ".env.sample"))
    ).toBe(true);
  });

  // Test: Check if the (server) .env file is properly filled with valid database connection information
  const url = process.env.API_URL;
  test("You have filled /server/.env with valid information to connect to your database", async () => {
    // Query the database to check if the connection is successful
    const response = await supertest(url).get("/api/categories");

    expect(response.status).toBe(200);
  });

  // Test: Check if the database migration and seeding scripts have been executed
  test("You have executed the db:migrate and db:seed scripts", async () => {
    // Query the 'video' table to check if any data has been inserted
    const response = await supertest(url).get("/api/videos");

    expect(response.body.length).toBeGreaterThan(0);
  });
});

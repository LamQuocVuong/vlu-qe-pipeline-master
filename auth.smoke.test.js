const { login } = require("./auth");

test("Login đúng admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});

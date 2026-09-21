const { login } = require("./auth");

test("Sai mật khẩu", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "12@3")).toBe(false);
});

test("Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});

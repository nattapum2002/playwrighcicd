const { test, expect } = require("@playwright/test");
var user_id;
test("get Users CI/CD", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  //   console.log(response);

  expect(response.status()).toBe(200);
});

test("create Users CI/CD", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    date: { name: "morpheus", job: "leader" },
    headers: { Accept: "application/json" },
  });
  expect(response.status()).toBe(201);

  var res = await response.json();
  user_id = res.id;
});

test("update Users CI/CD", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/" + user_id, {
    date: { name: "morpheus", job: "zion resident" },
    headers: { Accept: "application/json" },
  });

  expect(response.status()).toBe(200);
});

test("delete Users CI/CD", async ({ request }) => {
  const response = await request.delete(
    "https://reqres.in/api/users/" + user_id
  );

  expect(response.status()).toBe(204);
});

import { assertEquals } from "@std/assert";
import { STATUS_CODE } from "@std/http/status";

import app from "./server.tsx";

Deno.test("Serve", async (t: Deno.TestContext) => {
  await t.step("/", async () => {
    const res: Response = await app.request("/");

    assertEquals(res.status, STATUS_CODE.OK);
  });

  await t.step("/favicon.ico", async () => {
    const res: Response = await app.request("/favicon.ico");
    await res.text();

    assertEquals(res.status, STATUS_CODE.OK);
  });
  await t.step("/public/style.css", async () => {
    const res: Response = await app.request("/public/style.css");
    await res.text();

    assertEquals(res.status, STATUS_CODE.OK);
  });

  await t.step("*", async () => {
    const res: Response = await app.request("/anything/else");

    assertEquals(res.headers.get("Location"), "/");
    assertEquals(res.status, STATUS_CODE.SeeOther);
  });
});

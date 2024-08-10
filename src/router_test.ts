import { type RouterContext, testing } from "@oak/oak";
import { assertEquals } from "@std/assert";
import { STATUS_CODE } from "@std/http/status";
import { router } from "./router.ts";

Deno.test("Serve", async <R extends string>(t: Deno.TestContext) => {
  await t.step("/", async () => {
    const ctx: RouterContext<R> = testing.createMockContext({
      method: "GET",
      path: "/",
    });
    await router.routes()(ctx, () => Promise.resolve());

    assertEquals(ctx.response.status, STATUS_CODE.OK);
  });

  await t.step("/public/index.html", async () => {
    const ctx: RouterContext<R> = testing.createMockContext({
      method: "GET",
      path: `/public/style.css`,
    });
    await router.routes()(ctx, () => Promise.resolve());

    assertEquals(ctx.response.status, STATUS_CODE.OK);
    assertEquals(ctx.response.body, await Deno.readFile("./public/style.css"));
  });

  await t.step("/public/unknown", async () => {
    const ctx: RouterContext<R> = testing.createMockContext({
      method: "GET",
      path: `/public/unknown`,
    });
    await router.routes()(ctx, () => Promise.resolve());

    assertEquals(ctx.response.status, STATUS_CODE.PermanentRedirect);
  });
});

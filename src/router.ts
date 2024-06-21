import { Router, type RouterContext, send } from "@oak/oak";
import { STATUS_CODE } from "@std/http/status";

export const router = new Router();
router
  .get("/", async <R extends string>(ctx: RouterContext<R>) => {
    ctx.response.type = "text/html";
    ctx.response.status = STATUS_CODE.OK;
    ctx.response.body = await Deno.readFile("./src/index.html");
  })
  .get("/static/:path", async <R extends string>(ctx: RouterContext<R>) => {
    try {
      await send(ctx, ctx.request.url.pathname, { root: Deno.cwd() });
    } catch {
      ctx.response.status = STATUS_CODE.PermanentRedirect;
      ctx.response.redirect("/");
    }
  });

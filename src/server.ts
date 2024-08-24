import { type Context, Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { STATUS_CODE } from "@std/http/status";

export const app = new Hono();
app
  .use("/", serveStatic({ path: "./public/index.html" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .get("*", (ctx: Context) => ctx.redirect("/", STATUS_CODE.SeeOther));

Deno.serve(app.fetch);

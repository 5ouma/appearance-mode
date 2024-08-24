import { type Context, Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { STATUS_CODE } from "@std/http/status";

import { Home } from "./components/home.tsx";

export const app = new Hono();
app
  .get("/", (ctx: Context) => ctx.html(<Home />))
  .use("/public/*", serveStatic({ root: "./" }))
  .get("*", (ctx: Context) => ctx.redirect("/", STATUS_CODE.SeeOther));

Deno.serve(app.fetch);

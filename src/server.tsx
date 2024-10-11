import { type Context, Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { logger } from "@hono/hono/logger";
import { STATUS_CODE } from "@std/http/status";

import { Home } from "./components/home.tsx";

/**
 * The Hono application for the site.
 *
 * @example Request the root path
 * ```ts
 * const res: Response = await app.request("/");
 * ```
 * @example Request a static file
 * ```ts
 * const res: Response = await app.request("/public/style.css");
 * await res.body?.cancel();
 * ```
 */
export const app = new Hono();
app.use(logger());
app
  .get("/", (ctx: Context) => ctx.html("<!DOCTYPE html>" + <Home />))
  .use("/favicon.ico", serveStatic({ path: "./public/favicon.ico" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .get("*", (ctx: Context) => ctx.redirect("/", STATUS_CODE.SeeOther));

Deno.serve(app.fetch);

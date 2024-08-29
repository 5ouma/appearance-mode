import { type Context, Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
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
 * ```
 */
export const app = new Hono();
app
  .get("/", (ctx: Context) => ctx.html(<Home />))
  .use("/public/*", serveStatic({ root: "./" }))
  .get("*", (ctx: Context) => ctx.redirect("/", STATUS_CODE.SeeOther));

Deno.serve(app.fetch);

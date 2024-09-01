import type { FC } from "@hono/hono/jsx";
export type { FC };

import { Head, type siteInfo } from "./head.tsx";
import { Body } from "./body.tsx";

const siteInfo: siteInfo = {
  title: "Appearance Mode",
  description: "🌗 Show which appearance mode your device is in",
  css: "/public/style.css",
};

/**
 * The home page of the site
 *
 * @returns The home page JSX element
 *
 * @example
 * ```tsx
 * <Home />
 * ```
 */
export const Home: FC = () => (
  <html lang="en">
    <head>
      <Head {...siteInfo} />
    </head>
    <body>
      <Body>
        Now <br />
        loading...
      </Body>
    </body>
  </html>
);

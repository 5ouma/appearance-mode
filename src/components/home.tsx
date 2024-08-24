import type { FC } from "@hono/hono/jsx";

import { Head } from "./head.tsx";
import { Body } from "./body.tsx";

const siteInfo = {
  title: "Appearance Mode",
  description: "🌗 Show which appearance mode your device is in",
  icon: "/public/favicon.icns",
  css: "/public/style.css",
};

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

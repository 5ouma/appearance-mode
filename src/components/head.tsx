import { type FC, Fragment, type PropsWithChildren } from "@hono/hono/jsx";

/**
 * Information about the site and its files.
 *
 * @property title The title of the site
 * @property description The description of the site
 * @property icon The icon path of the site
 * @property css The CSS file path of the site
 *
 * @example
 * ```ts
 * const siteInfo: siteInfo = {
 *   title: "Appearance Mode",
 *   description: "🌗 Show which appearance mode your device is in"
 *   icon: "/public/favicon.icns",
 *   css: "/public/style.css",
 * };
 * ```
 */
export type siteInfo = {
  title: string;
  description: string;
  icon: string;
  css: string;
};

/**
 * The head of the site.
 *
 * @param props The information about the site
 * @returns The head JSX element
 *
 * @example
 * ```tsx
 * const siteInfo: siteInfo = {};
 * <Head {...siteInfo} />
 * ```
 * @see {@link siteInfo}
 */
export const Head: FC<siteInfo> = (props: PropsWithChildren<siteInfo>) => (
  <Fragment>
    <meta charset="UTF-8" />
    <meta name="color-scheme" content="light dark" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <link rel="icon" href={props.icon} />
    <link rel="stylesheet" type="text/css" href={props.css} />
  </Fragment>
);

import { type FC, Fragment, type PropsWithChildren } from "@hono/hono/jsx";

/**
 * The body of the site.
 *
 * @param props The children, h1 text to show when loading of the body
 * @returns The body JSX element
 *
 * @example
 * ```tsx
 * <Body>Appearance Mode</Body>
 * ```
 */
export const Body = (props: PropsWithChildren): ReturnType<FC> => (
  <Fragment>
    <h1>{props.children}</h1>
    <script type="text/javascript" src="/public/script.js"></script>
  </Fragment>
);

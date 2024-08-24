import { type FC, Fragment, type PropsWithChildren } from "@hono/hono/jsx";

type siteInfo = {
  title: string;
  description: string;
  icon: string;
  css: string;
};

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

import { type FC, Fragment, type PropsWithChildren } from "@hono/hono/jsx";

export const Body: FC = (props: PropsWithChildren) => (
  <Fragment>
    <h1>{props.children}</h1>
    <script type="text/javascript" src="/public/script.js"></script>
  </Fragment>
);

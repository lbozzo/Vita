/** @jsxImportSource theme-ui */

import { FC } from "react";

const Section: FC = ({ children }) => (
  <section sx={{ marginY: 64, "&:first-of-type": { marginY: 36 } }}>
    {children}
  </section>
);

export default Section;

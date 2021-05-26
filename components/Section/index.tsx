import { Box, BoxProps } from "@theme-ui/components";
import { FC } from "react";

interface SectionProps extends BoxProps {}

const Section: FC<SectionProps> = ({ children, ...props }) => (
  <Box
    as="section"
    sx={{ marginY: 64, "&:first-of-type": { marginY: 36 } }}
    {...props}
  >
    {children}
  </Box>
);

export default Section;

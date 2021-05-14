/** @jsxImportSource theme-ui */
import { cloneElement, FC, useEffect, useState } from "react";
import { Box, Link as TLink } from "theme-ui";
import { IconArrowUpRight, IconLink } from "@tabler/icons";
import NLink from "next/link";

type LinkProps = {
  src?: string;
};

const Link: FC<LinkProps> = ({ src, children }) => {
  const [isExternal, setExternal] = useState<boolean>(false);
  useEffect(() => {
    setExternal(!new RegExp(window.location.host).test(src));
  }, []);

  return src ? (
    <Box sx={{ display: "inline-block" }}>
      <NLink href={src} passHref>
        <TLink
          rel="noopener noreferrer"
          {...(isExternal && { target: "_blank" })}
        >
          {children}
        </TLink>
      </NLink>
      <span sx={{ marginLeft: "2px" }}>
        {cloneElement(isExternal ? <IconArrowUpRight /> : <IconLink />, {
          size: 12,
          stroke: 1.5,
        })}
      </span>
    </Box>
  ) : (
    <>{children}</>
  );
};

export default Link;

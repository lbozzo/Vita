/** @jsxImportSource theme-ui */
import { cloneElement, FC, useEffect, useState } from "react";
import { Box, Link as TLink } from "theme-ui";
import { IconArrowUpRight, IconLink } from "@tabler/icons";
import NLink, { LinkProps as NLinkProps } from "next/link";

const Link: FC<Pick<NLinkProps, "href">> = ({ href, children }) => {
  const [isExternal, setExternal] = useState<boolean>(
    !href.toString().startsWith("/")
  );

  return (
    <Box>
      <NLink href={href} passHref>
        <TLink
          rel="noopener noreferrer"
          {...(isExternal && { target: "_blank" })}
        >
          {children}
        </TLink>
      </NLink>
      {isExternal && (
        <span sx={{ marginLeft: "2px" }}>
          <IconArrowUpRight size={12} stroke={1.5} />
        </span>
      )}
    </Box>
  );
};

export default Link;

/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Box, Link as TLink } from "theme-ui";
import { IconArrowUpRight } from "@tabler/icons";
import NLink, { LinkProps as NLinkProps } from "next/link";

interface LinkProps extends Pick<NLinkProps, "href"> {}

const Link: FC<LinkProps> = ({ href, children }) => {
  const isExternal = !href.toString().startsWith("/");

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

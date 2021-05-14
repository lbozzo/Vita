/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Link as TLink } from "theme-ui";
import { IconArrowUpRight } from "@tabler/icons";

type LinkProps = {
  src?: string;
};

const Link: FC<LinkProps> = ({ src, children }) => {
  return src ? (
    <>
      <TLink href={src} target="_blank" rel="noopener noreferrer">
        {children}
      </TLink>
      <IconArrowUpRight size={12} strokeWidth={1.5} />
    </>
  ) : (
    <>{children}</>
  );
};

export default Link;

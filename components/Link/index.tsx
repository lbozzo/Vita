import { FC } from "react";
import { ArrowUpRightIcon } from "../Icons";

type LinkProps = {
  src?: string;
};

const Link: FC<LinkProps> = ({ src, children }) => {
  return src ? (
    <div className="block whitespace-nowrap">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="inline"
      >
        {children}
      </a>
      <ArrowUpRightIcon
        size={12}
        strokeWidth={1.5}
        className="inline ml-[2px] mb-[2px]"
      />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Link;

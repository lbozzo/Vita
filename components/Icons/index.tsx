import { FC, SVGProps } from "react";
export * from "./Moon";
export * from "./Sun";
export * from "./DeviceDesktop";
export * from "./ArrowUpRight";
export * from "./Selector";

export interface IconProps
  extends Pick<
    SVGProps<SVGSVGElement>,
    "key" | "width" | "height" | "strokeWidth" | "className"
  > {
  size?: string | number;
}

export const Icon: FC<IconProps> = ({ children, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
};

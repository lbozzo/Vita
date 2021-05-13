/** @jsxImportSource theme-ui */
import { IconSelector } from "@tabler/icons";
import { Flex } from "@theme-ui/components";
import {
  cloneElement,
  DetailedHTMLProps,
  FC,
  SelectHTMLAttributes,
} from "react";

export interface SelectorProps
  extends Pick<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "defaultValue" | "value" | "onChange"
  > {
  left?: React.ReactElement;
}

const Selector: FC<SelectorProps> = ({
  children,
  value,
  defaultValue,
  left,
  onChange,
}) => (
  <Flex
    sx={{
      position: "relative",
      "&:hover": { color: "heading" },
    }}
  >
    <Flex sx={{ marginRight: "-28px", alignSelf: "center" }}>
      {cloneElement(left, {
        size: 16,
        stroke: 1.5,
      })}
    </Flex>
    <select
      sx={{
        width: "100%",
        cursor: "pointer",
        backgroundColor: "transparent",
        WebkitAppearance: "none",
        paddingRight: 4,
        paddingLeft: left ? 4 : 2,
        paddingY: 2,
        borderRadius: 4,
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "text",
        "&:hover": {
          color: "heading",
        },
      }}
      id="filter-select"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </select>
    <IconSelector
      sx={{ alignSelf: "center", marginLeft: "-24px", pointerEvents: "none" }}
      stroke={1.5}
      size={14}
    />
  </Flex>
);

export default Selector;

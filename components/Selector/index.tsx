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
  label: React.ReactElement | string;
}

const Selector: FC<SelectorProps> = ({
  children,
  value,
  defaultValue,
  left,
  label,
  onChange,
}) => (
  <Flex
    sx={{
      position: "relative",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "text",
      borderRadius: 4,
      color: "text",
      "&:hover": {
        borderColor: "heading",
        color: "heading",
      },
    }}
  >
    <Flex
      sx={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <Flex paddingRight={2}>
        {cloneElement(left, {
          size: 16,
          stroke: 1.5,
        })}
      </Flex>
      <label
        htmlFor="filter-select"
        sx={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </label>
      <Flex paddingLeft={2}>
        <IconSelector stroke={1.5} size={14} />
      </Flex>
    </Flex>
    <select
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        WebkitAppearance: "none",
        fontSize: 16,
        opacity: 0,
        cursor: "pointer",
      }}
      id="filter-select"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </select>
  </Flex>
);

export default Selector;

/** @jsxImportSource theme-ui */
import { IconSelector } from "@tabler/icons";
import { Box, Flex } from "@theme-ui/components";
import {
  DetailedHTMLProps,
  FC,
  OptionHTMLAttributes,
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
  options: Array<
    Pick<
      DetailedHTMLProps<
        OptionHTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
      >,
      "key" | "value" | "label"
    >
  >;
}

const Selector: FC<SelectorProps> = ({
  children,
  options,
  value,
  defaultValue,
  onChange,
}) => (
  <Box
    sx={{
      position: "relative",
      "&:hover": { color: "heading" },
    }}
  >
    <select
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        opacity: 0,
        cursor: "pointer",
      }}
      id="filter-select"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <Flex
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: "solid",
      }}
      paddingY="2px"
      paddingLeft="12px"
      paddingRight="8px"
    >
      <label
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        htmlFor="filter-select"
      >
        {children}
      </label>
      <IconSelector sx={{ marginLeft: 3 }} stroke={1.5} size={18} />
    </Flex>
  </Box>
);

export default Selector;

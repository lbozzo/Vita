import {
  DetailedHTMLProps,
  FC,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import { SelectorIcon } from "../Icons";

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
  <div className="relative text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 group">
    <select
      className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer text-[16px]"
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
    <div className="flex items-center py-1 pl-3 pr-2 rounded-md border border-gray-200 group-hover:border-gray-500 dark:border-gray-500 dark:group-hover:border-gray-300">
      <label className="flex-1" htmlFor="filter-select">
        {children}
      </label>
      <SelectorIcon size={24} />
    </div>
  </div>
);

export default Selector;

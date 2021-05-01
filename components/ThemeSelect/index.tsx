import { useTheme } from "next-themes";
import { cloneElement, ReactNode, useEffect, useMemo, useState } from "react";
import { DeviceDesktopIcon, MoonIcon, SunIcon } from "../Icons";
import Selector from "../Selector";

const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const options = [
    {
      key: "System",
      label: "System",
      value: "system",
      icon: <DeviceDesktopIcon />,
    },
    {
      key: "Light",
      label: "Light",
      value: "light",
      icon: <SunIcon />,
    },
    { key: "Dark", label: "Dark", value: "dark", icon: <MoonIcon /> },
  ];

  const onChange = (e: any) => {
    setTheme(e.currentTarget.value);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Selector options={options} value={theme} onChange={onChange}>
      <span className="flex flex-row items-center">
        <span className="w-5">
          {cloneElement(options.find((el) => el.value === theme).icon, {
            size: 18,
          })}
        </span>
        <span className="ml-2 text-gray-900 dark:text-gray-300">
          {options.find((el) => el.value === theme).label}
        </span>
      </span>
    </Selector>
  );
};

export default ThemeSelect;

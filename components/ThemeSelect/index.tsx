/** @jsxImportSource theme-ui */
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons";
import { useColorMode } from "@theme-ui/color-modes";
import { Box } from "@theme-ui/components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Selector from "../Selector";

const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [colorMode, setColorMode] = useColorMode();

  const options = [
    {
      key: "System",
      label: "System",
      value: "system",
      icon: <IconDeviceDesktop />,
    },
    {
      key: "Light",
      label: "Light",
      value: "light",
      icon: <IconSun />,
    },
    {
      key: "Dark",
      label: "Dark",
      value: "dark",
      icon: <IconMoon />,
    },
  ];

  const onChange = (e: any) => {
    setTheme(e.currentTarget.value);
  };

  useEffect(() => {
    setMounted(true);
    setColorMode(resolvedTheme);
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <Box>
      <Selector
        defaultValue={theme}
        onChange={onChange}
        left={options.find((el) => el.value === theme).icon}
        label={options.find((el) => el.value === theme).label}
      >
        {options.map(({ key, label, value }) => {
          return (
            <option key={key} value={value}>
              {label}
            </option>
          );
        })}
      </Selector>
    </Box>
  );
};

export default ThemeSelect;

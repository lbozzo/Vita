import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons";
import { useColorMode } from "@theme-ui/color-modes";
import { Text } from "@theme-ui/components";
import { useTheme } from "next-themes";
import { cloneElement, useEffect, useState } from "react";

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
    <Selector options={options} value={theme} onChange={onChange}>
      <Text sx={{ width: 20 }} paddingTop={2}>
        {cloneElement(options.find((el) => el.value === theme).icon, {
          size: 18,
        })}
      </Text>
      <Text marginLeft={2}>
        {options.find((el) => el.value === theme).label}
      </Text>
    </Selector>
  );
};

export default ThemeSelect;

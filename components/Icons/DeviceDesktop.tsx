import { Icon, IconProps } from ".";

export function DeviceDesktopIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="4" width="18" height="12" rx="1"></rect>
      <line x1="7" y1="20" x2="17" y2="20"></line>
      <line x1="9" y1="16" x2="9" y2="20"></line>
      <line x1="15" y1="16" x2="15" y2="20"></line>
    </Icon>
  );
}

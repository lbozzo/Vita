import { Icon, IconProps } from ".";

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="8 7 17 7 17 16"></polyline>
    </Icon>
  );
}

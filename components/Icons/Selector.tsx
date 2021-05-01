import { Icon, IconProps } from ".";

export function SelectorIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="8 9 12 5 16 9"></polyline>
      <polyline points="16 15 12 19 8 15"></polyline>
    </Icon>
  );
}

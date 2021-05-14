/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Text } from "@theme-ui/components";
import { FC, ReactNode } from "react";
import Link from "../Link";

type ItemProps = {
  left: ReactNode | string;
  title: ReactNode | string;
  detail?: string;
};

const Item: FC<ItemProps> = ({ left, title, detail }) => {
  return (
    <Flex
      sx={{ flexDirection: ["column", "column", "row"], flex: 1 }}
      marginLeft={[16, 16, 0]}
    >
      <Box sx={{ width: "15ch" }} marginRight={36}>
        {left}
      </Box>
      <div sx={{ width: "100%" }}>
        <Link>
          <Text variant="heading">{title}</Text>
        </Link>
        {detail && <div>{detail}</div>}
      </div>
    </Flex>
  );
};

export default Item;

export const ItemList: FC<{ space?: number }> = ({ children, space }) => {
  if (React.Children.count(children)) {
    return (
      <>
        {React.Children.map(children, (child) => (
          <Box
            sx={{
              marginY: space || 64,
              "&:first-of-type": { marginY: 0, paddingTop: 24, width: "100%" },
            }}
          >
            {child}
          </Box>
        ))}
      </>
    );
  }
  return null;
};

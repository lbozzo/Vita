/** @jsxImportSource theme-ui */
import { IconStar } from "@tabler/icons";
import { Flex } from "@theme-ui/components";
import { FC } from "react";

export type RatingProps = {
  value: 1 | 2 | 3 | 4 | 5;
};

const Rating: FC<RatingProps> = ({ value }) => {
  return (
    <Flex sx={{ flexDirection: "row" }}>
      {[...Array(5)].flatMap((_value, index) => {
        return (
          <IconStar
            key={index}
            size={14}
            sx={{ opacity: value >= index + 1 ? 1 : 0.35 }}
          />
        );
      })}
    </Flex>
  );
};

export default Rating;

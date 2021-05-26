/** @jsxImportSource theme-ui */
import { useMemo, useState } from "react";
import { Box, Button, Flex, IconButton, Text } from "@theme-ui/components";
import { FC, ReactNode } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons";
import { LinkProps } from "next/link";
import Link from "../Link";

interface ItemProps extends Partial<Pick<LinkProps, "href">> {
  left: ReactNode | string;
  title: ReactNode | string;
  detail?: ReactNode | string;
}

const Item: FC<ItemProps> = ({ left, title, detail, href }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      marginLeft={[16, 16, 0]}
    >
      <Box sx={{ width: "15ch" }} marginRight={36}>
        {left}
      </Box>
      <div sx={{ width: "100%" }}>
        <Box sx={{ fontWeight: "heading", color: "heading" }}>
          {href ? <Link href={href}>{title}</Link> : title}
        </Box>
        {detail && <Box>{detail}</Box>}
      </div>
    </Flex>
  );
};

export default Item;

const Pagination = ({
  pages,
  current,
  onPrevious,
  onNext,
  onSelect,
}: {
  pages: number;
  current: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onSelect?: (page: number) => void;
}) => {
  return (
    <Flex
      sx={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex sx={{ "> *": { marginRight: 3 } }}>
        {[...Array(pages)].map((_page, index) => {
          return (
            <Button
              key={index}
              sx={{
                cursor: "pointer",
                bg: "transparent",
                borderRadius: 0,
                borderBottomWidth: 1,
                borderBottomColor:
                  index + 1 === current ? "text" : "transparent",
                borderBottomStyle: "solid",
                paddingX: 1,
                paddingY: 1,
                marginRight: 3,
                "&:hover": {
                  borderBottomColor: "text",
                },
              }}
              onClick={() => onSelect(index)}
            >
              <Text variant="heading" sx={{ fontWeight: "heading" }}>
                {index + 1}
              </Text>
            </Button>
          );
        })}
      </Flex>
      <Flex sx={{ "> *": { marginLeft: 2 } }}>
        <Box>
          <IconButton onClick={onPrevious} disabled={current <= 1}>
            <IconArrowNarrowLeft size={18} stroke={1.5} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={onNext} disabled={current >= pages}>
            <IconArrowNarrowRight size={18} stroke={1.5} />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export const ItemList = ({
  space,
  data,
  renderItem,
  enablePagination = false,
  pageSize = 0,
}: {
  space?: number;
  data: Array<any>;
  renderItem: Function;
  enablePagination?: boolean;
  pageSize?: number;
}) => {
  const [page, setPage] = useState<number>(0);
  const [itemList, setItemList] = useState<typeof data>([]);
  const pages = Math.ceil(data.length / pageSize);

  const handleClick = (value: number) => {
    setPage(value);
  };

  useMemo(() => {
    if (enablePagination) {
      setItemList(
        data.slice((page + 1) * pageSize - pageSize, (page + 1) * pageSize)
      );
    } else {
      setItemList(data);
    }
  }, [page, data]);

  useMemo(() => {
    setPage(0);
  }, [pageSize]);

  return (
    <>
      <Box
        sx={{
          "> div": {
            marginY: space || 64,
          },
          "> div:first-of-type": {
            marginY: 0,
            paddingTop: 24,
            width: "100%",
          },
        }}
      >
        {itemList.map((item, key) => {
          return renderItem(item, key);
        })}
      </Box>
      {enablePagination && (
        <Box marginY={64}>
          <Pagination
            current={page + 1}
            pages={pages}
            onPrevious={() => handleClick(page - 1)}
            onNext={() => handleClick(page + 1)}
            onSelect={handleClick}
          />
        </Box>
      )}
    </>
  );
};

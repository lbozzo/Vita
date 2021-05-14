import { IconBrandSpotify } from "@tabler/icons";
import { Box, Flex, Text } from "@theme-ui/components";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Link from "../Link";

const PlayingNow = (): JSX.Element => {
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <Flex sx={{ alignItems: "center" }}>
      <IconBrandSpotify stroke={1.5} size={18} />
      <Box marginLeft={1}>
        {data && data.title ? (
          <Link src={data.songUrl}>
            Listening to <Text variant="heading">{data?.title}</Text>
          </Link>
        ) : (
          <Text>Nothing playing right now.</Text>
        )}
      </Box>
    </Flex>
  );
};

export default PlayingNow;

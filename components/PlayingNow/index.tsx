import { IconHeadphones } from "@tabler/icons";
import { Flex, Text } from "@theme-ui/components";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { NowPlaying } from "../../pages/api/now-playing";
import Link from "../Link";

const PlayingNow = (): JSX.Element => {
  const { data } = useSWR<NowPlaying>("/api/now-playing", fetcher);

  return (
    <Flex sx={{ alignItems: "flex-start" }}>
      <Flex paddingTop="3px">
        <IconHeadphones stroke={1.5} size={18} />
      </Flex>
      <Flex marginLeft={2} sx={{ flex: 1 }}>
        {data && data.title ? (
          <Link href={data.songUrl}>
            Listening to <Text variant="heading">{data?.title}</Text> by{" "}
            <Text variant="heading">{data.artist}</Text>
          </Link>
        ) : (
          <Text>Nothing playing right now.</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default PlayingNow;

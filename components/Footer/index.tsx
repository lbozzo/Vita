import { Box, Flex } from "@theme-ui/components";
import Link from "../Link";
import PlayingNow from "../PlayingNow";
import Section from "../Section";
import ThemeSelect from "../ThemeSelect";

export default function Footer() {
  return (
    <Section as="footer">
      <Box>
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "row"],
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Flex sx={{ flex: 1 }} marginRight={4} marginY={3} paddingTop={1}>
            <PlayingNow />
          </Flex>
          <Flex sx={{ width: 130 }} marginY={3}>
            <ThemeSelect />
          </Flex>
        </Flex>
      </Box>
      <Flex sx={{ flexDirection: "column", "> div": { marginTop: 2 } }}>
        <Link href="/">Home</Link>
        <Link href="/readings">Readings</Link>
      </Flex>
    </Section>
  );
}

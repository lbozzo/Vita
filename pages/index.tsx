/** @jsxImportSource theme-ui */
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "../components/Link";
import Item, { ItemList } from "../components/Item";
import Container from "../components/Container";
import { Box, Flex, Heading, Paragraph, Text } from "@theme-ui/components";
import PlayingNow from "../components/PlayingNow";
import Section from "../components/Section";

const ThemeSelect = dynamic(() => import("../components/ThemeSelect"));

export default function Home() {
  return (
    <Container>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ position: "relative", width: 92, height: 92 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "100%",
              overflow: "hidden",
              backgroundColor: "imageBackground",
            }}
          >
            <Image
              src="/images/me.jpeg"
              width={120}
              height={120}
              objectFit="cover"
              quality={100}
              loading="lazy"
              alt="Lucas Bozzo"
            />
          </Box>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "background",
              width: 26,
              height: 26,
              borderRadius: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "shadow",
              boxShadow: ({ colors }) => `0 1px 2px 0 ${colors.shadow}`,
            }}
          >
            <Text sx={{ fontSize: 12 }} marginRight={1}>
              &#x1F44B;
            </Text>
          </Flex>
        </Box>
        <Box sx={{ flex: 1 }} marginLeft={16}>
          <Heading sx={{ fontSize: 26, lineHeight: 1 }}>Lucas Bozzo</Heading>
          <Text>Web Developer based in London.</Text>
          <Box
            sx={{
              width: "max-content",
              fontSize: 12,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              lineHeight: 1.5,
              fontWeight: "heading",
            }}
            marginTop={1}
            paddingX={2}
            paddingY={1}
            bg="primary"
            color="white"
          >
            Available for work
          </Box>
        </Box>
      </Flex>
      <Section>
        <Heading as="h3">About</Heading>
        <Paragraph marginLeft={[16, 16, 0]}>
          I&apos;m a full-stack developer and aspiring UI Designer focused on
          Web technologies and hybrid mobile apps. I'm based in London, United
          Kingdom. I consider myself as a traveler and coffee addict.{" "}
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3">Side Projects</Heading>
        <ItemList>
          <Item
            left="2021 - Now"
            title={<Link src="https://cuspide.vercel.app">Cuspide</Link>}
            detail="Positive mindset. Motivational quotes to reach your true potential. Inspired by Maslow's hierarchy of needs."
          />
          <Item
            left="2021 - Now"
            title="Inara Labs"
            detail="High quality and performant websites for entrepreneurs and small businesses."
          />
        </ItemList>
      </Section>
      <Section>
        <Heading as="h3">Work Experience</Heading>
        <ItemList>
          <Item
            left="2020 - 2020"
            title="Web Developer at Maddot Studio"
            detail="Remote"
          />

          <Item
            left="2017 — 2019"
            title="Business Systems Analyst at Copa Airlines"
            detail="Panama"
          />

          <Item
            left="2018 — 2019"
            title={<Link>Software Developer at Clariti Chile</Link>}
            detail="Remote"
          />

          <Item
            left="2014 — 2016"
            title={<Link>Software Developer at Atesis S.A.</Link>}
            detail="Panama"
          />
        </ItemList>
      </Section>
      <Section>
        <Heading as="h3">Education</Heading>
        <ItemList>
          <Item
            left="2020 — 2021"
            title="MSc. International Business Management at Newcastle University"
            detail="United Kingdom"
          />

          <Item
            left="2012 — 2016"
            title="BA. Telematic systems Engineering at Universidad Católica Santa María la Antigua"
            detail="Panama"
          />
        </ItemList>
      </Section>
      <Section>
        <Heading as="h3">Volunteering</Heading>
        <ItemList>
          <Item left="2015" title="Fundación Caminos de Luz" detail="Panama" />
        </ItemList>
      </Section>
      <Section>
        <Heading as="h3">Contact</Heading>
        <ItemList space={16}>
          <Item
            left="Email"
            title={
              <Link src="mailto:lucas.bozzo@icloud.com">
                lucas.bozzo@icloud.com
              </Link>
            }
          />
          <Item
            left="Github"
            title={<Link src="https://github.com/lbozzo">lbozzo</Link>}
          />
          <Item
            left="Twitter"
            title={<Link src="https://twitter.com/ljbozzo">ljbozzo</Link>}
          />
          <Item
            left="Instagram"
            title={
              <Link src="https://instagram.com/lucasbozzo">lucasbozzo</Link>
            }
          />
        </ItemList>
      </Section>
      <Section>
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
      </Section>
    </Container>
  );
}

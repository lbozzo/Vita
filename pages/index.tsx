/** @jsxImportSource theme-ui */
import Image from "next/image";
import Link from "../components/Link";
import Item, { ItemList } from "../components/Item";
import Page from "../components/Page";
import { Box, Flex, Heading, Paragraph, Text } from "@theme-ui/components";
import Section from "../components/Section";

export default function Home() {
  return (
    <Page>
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
        <ItemList
          data={[
            {
              period: "2021 - Now",
              title: "Contorda",
              detail:
                "Contactless Orderning Software for small to medium business in Latam.",
            },
            {
              period: "2021 - Now",
              title: "Inara Labs",
              detail:
                "High quality and performant websites for entrepreneurs and small businesses.",
            },
            {
              period: "2021",
              title: "Cuspide",
              detail:
                "Positive mindset. Motivational quotes to reach your true potential. Inspired by Maslow's hierarchy of needs.",
              href: "https://cuspide.vercel.app",
            },
          ]}
          renderItem={({ period, title, detail, href }, key) => (
            <Item
              key={key}
              left={period}
              title={title}
              href={href}
              detail={detail}
            />
          )}
        />
      </Section>
      <Section>
        <Heading as="h3">Work Experience</Heading>
        <ItemList
          data={[
            {
              period: "2020 - 2020",
              position: "Web Developer at Maddot Studio",
              location: "Remote",
            },
            {
              period: "2017 — 2019",
              position: "Business Systems Analyst at Copa Airlines",
              location: "Panama",
            },
            {
              period: "2018 — 2019",
              position: "Software Developer at Clariti Chile",
              location: "Remote",
            },
            {
              period: "2014 — 2016",
              position: "Software Developer at Atesis S.A.",
              location: "Panama",
            },
          ]}
          renderItem={({ period, position, location }, key) => (
            <Item key={key} left={period} title={position} detail={location} />
          )}
        />
      </Section>
      <Section>
        <Heading as="h3">Education</Heading>
        <ItemList
          data={[
            {
              period: "2020 — 2021",
              institution:
                "MSc. International Business Management at Newcastle University",
              location: "United Kingdom",
            },
            {
              period: "2012 - 2016",
              institution:
                "BA. Telematic systems Engineering at Universidad Católica Santa María la Antigua",
              location: "Panama",
            },
          ]}
          renderItem={({ period, institution, location }, key) => (
            <Item
              key={key}
              left={period}
              title={institution}
              detail={location}
            />
          )}
        ></ItemList>
      </Section>
      <Section>
        <Heading as="h3">Volunteering</Heading>
        <ItemList
          data={[
            {
              year: "2015",
              title: "Fundación Caminos de Luz",
              location: "Panama",
            },
          ]}
          renderItem={({ year, title, location }, key) => (
            <Item key={key} left={year} title={title} detail={location} />
          )}
        />
      </Section>
      <Section>
        <Heading as="h3">Contact</Heading>
        <ItemList
          space={16}
          data={[
            {
              label: "Email",
              href: "mailto:lucas.bozzo@icloud.com",
              account: "lucas.bozzo@icloud.com",
            },
            {
              label: "Github",
              href: "https://github.com/lbozzo",
              account: "lbozzo",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ljbozzo",
              account: "ljbozzo",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/lucasbozzo",
              account: "lucasbozzo",
            },
          ]}
          renderItem={({ label, href, account }, key) => (
            <Item
              key={key}
              left={label}
              title={<Link href={href}>{account}</Link>}
            />
          )}
        />
      </Section>
    </Page>
  );
}

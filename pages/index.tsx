/** @jsxImportSource theme-ui */
import Image from "next/image";
import Link from "../components/Link";
import Item, { ItemList } from "../components/Item";
import Page from "../components/Page";
import { Box, Flex, Heading, Paragraph, Text } from "@theme-ui/components";
import Section from "../components/Section";
import { getFiles, MDX } from "../lib/mdx";
import _ from "lodash";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        projects: _.orderBy(
          getFiles("project"),
          ["data.date", "data.order"],
          ["desc", "asc"]
        ),
        work: _.orderBy(getFiles("work"), ["data.date"], ["asc"]),
        education: _.orderBy(getFiles("education"), ["data.date"], ["asc"]),
        volunteering: _.orderBy(
          getFiles("volunteering"),
          ["data.date"],
          ["asc"]
        ),
      },
    },
  };
};

interface Project {
  date: string;
  name: string;
  description?: string;
  href?: string;
  order?: string;
}

interface Work {
  date: string;
  company: string;
  position: string;
  location?: string;
  href?: string;
  order?: string;
}

interface Education {
  date: string;
  institution: string;
  degree: string;
  location?: string;
  href?: string;
  order?: string;
}

interface Volunteering {
  date: string;
  company: string;
  position?: string;
  location?: string;
  href?: string;
  order?: string;
}

interface HomeProps {
  data: {
    projects: MDX<Project>[];
    work: MDX<Work>[];
    education: MDX<Education>[];
    volunteering: MDX<Volunteering>[];
  };
}

const Home: NextPage<HomeProps> = ({
  data: { projects, work, education, volunteering },
}) => {
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
          <Text>Front-end Engineer based in London.</Text>
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
          I&apos;m a front-end engineer and aspiring UI Designer focused on Web
          technologies and hybrid mobile apps. I'm based in London, United
          Kingdom. I consider myself as a traveler and coffee addict.{" "}
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3">Side Projects</Heading>
        <ItemList<MDX<Project>>
          data={projects}
          renderItem={({ data: { date, name, description, href } }, key) => (
            <Item
              key={key}
              left={date}
              title={name}
              href={href}
              detail={description}
            />
          )}
        />
      </Section>
      <Section>
        <Heading as="h3">Work Experience</Heading>
        <ItemList<MDX<Work>>
          data={work}
          renderItem={(
            { data: { date, position, company, location } },
            key
          ) => (
            <Item
              key={key}
              left={date}
              title={`${position} at ${company}`}
              detail={location}
            />
          )}
        />
      </Section>
      <Section>
        <Heading as="h3">Education</Heading>
        <ItemList<MDX<Education>>
          data={education}
          renderItem={(
            { data: { date, degree, institution, location } },
            key
          ) => (
            <Item
              key={key}
              left={date}
              title={`${degree} at ${institution}`}
              detail={location}
            />
          )}
        ></ItemList>
      </Section>
      <Section>
        <Heading as="h3">Volunteering</Heading>
        <ItemList<MDX<Volunteering>>
          data={volunteering}
          renderItem={({ data: { date, company, location } }, key) => (
            <Item key={key} left={date} title={company} detail={location} />
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
};

export default Home;

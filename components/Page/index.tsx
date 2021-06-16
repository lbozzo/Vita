import { FC } from "react";
import { NextSeo } from "next-seo";
import { Box, Container } from "@theme-ui/components";
import Footer from "../Footer";

const Page: FC = ({ children }) => {
  return (
    <>
      <NextSeo
        title="Lucas Bozzo - Front-end Engineer"
        description="Front-end engineer focused on Web technologies and hybrid mobile apps and aspiring UI Designer. I'm based in London, United Kingdom."
        canonical="https://www.lucasbozzo.dev/"
        openGraph={{
          url: "https://www.lucasbozzo.dev/",
          title: "Lucas Bozzo - Front-end Engineer",
          description:
            "Front-end engineer developer focused on Web technologies and hybrid mobile apps and aspiring UI Designer. I'm based in London, United Kingdom.",
          site_name: "Lucas Bozzo - Front-end Engineer",
        }}
        twitter={{
          handle: "@ljbozzo",
          site: "@ljbozzo",
          cardType: "summary",
        }}
      />
      <Container paddingY={48}>
        <Box as="main">{children}</Box>
        <Footer />
      </Container>
    </>
  );
};

export default Page;

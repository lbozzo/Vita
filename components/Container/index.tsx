import { FC } from "react";
import { NextSeo } from "next-seo";
import { Box } from "@theme-ui/components";

const Container: FC = ({ children }) => {
  return (
    <>
      <NextSeo
        title="Lucas Bozzo - Web Developer"
        description="Full-stack developer focused on Web technologies and hybrid mobile apps and aspiring UI Designer. I'm based in London, United Kingdom."
        canonical="https://www.lucasbozzo.dev/"
        openGraph={{
          url: "https://www.lucasbozzo.dev/",
          title: "Lucas Bozzo - Web Developer",
          description:
            "Full-stack developer focused on Web technologies and hybrid mobile apps and aspiring UI Designer. I'm based in London, United Kingdom.",
          site_name: "Lucas Bozzo - Web Developer",
        }}
        twitter={{
          handle: "@ljbozzo",
          site: "@ljbozzo",
          cardType: "summary",
        }}
      />
      <Box paddingY={48} paddingX={32} className="py-12 md:py-[72px] px-8">
        <Box sx={{ maxWidth: "67ch" }} marginX="auto">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Container;

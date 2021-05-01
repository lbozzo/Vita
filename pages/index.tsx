import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "../components/Link";
import Item from "../components/Item";

const ThemeSelect = dynamic(() => import("../components/ThemeSelect"));

export default function Home() {
  return (
    <div className="prose dark:prose-dark mx-auto max-w-prose font-normal md:font-light">
      <div className="flex flex-1 items-center">
        <div className="relative w-[92px] h-[92px]">
          <div className="h-full w-full  rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
            <Image
              src="/images/me.jpeg"
              width={120}
              height={120}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center absolute bottom-0 right-0 w-7 h-7 rounded-full shadow-sm border bg-white dark:bg-gray-500 border-gray-200 dark:border-gray-600">
            <span className="text-[12px]">&#x1F44B;</span>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h2>Lucas Bozzo</h2>
          <div>Web Developer based in London.</div>
          <div>
            <span className="text-gray-400 underline">Available for work.</span>
          </div>
        </div>
      </div>
      <section className="my-9">
        <h3>About</h3>
        <div className="ml-4 md:ml-0">
          I&apos;m a Web Developer and aspiring UI Designer. I consider myself
          as a traveler and coffee addict. I&apos;m from Panama, but I&apos;m
          living in the United Kingdom. I love to work on projects and learn as
          much as I can.
        </div>
      </section>
      <section className="my-16">
        <h3>Side Projects</h3>
        <div className="inline-block pt-6 w-full">
          <Item
            left="2021 - Now"
            title={<Link src="https://cuspide.vercel.app">Cuspide</Link>}
            detail="Positive mindset. Motivational quotes to reach your true potential. Inspired by Maslow's hierarchy of needs."
          />
        </div>
        <div className="my-9">
          <Item
            left="2021 - Now"
            title="Inara Labs"
            detail="High quality and performant websites for entrepreneurs and small businesses."
          />
        </div>
      </section>
      <section className="my-16">
        <h3>Work Experience</h3>
        <div className="inline-block pt-6 w-full">
          <Item
            left="2020 - 2020"
            title="Web Developer at Maddot Studio"
            detail="Remote"
          />
        </div>
        <div className="my-9">
          <Item
            left="2017 — 2019"
            title="Business Systems Analyst at Copa Airlines"
            detail="Panama"
          />
        </div>
        <div className="my-9">
          <Item
            left="2018 — 2019"
            title={<Link>Software Developer at Clariti Chile</Link>}
            detail="Remote"
          />
        </div>
        <div className="my-9">
          <Item
            left="2014 — 2016"
            title={<Link>Software Developer at Atesis S.A.</Link>}
            detail="Panama"
          />
        </div>
      </section>
      <section className="my-16">
        <h3>Education</h3>
        <div className="inline-block pt-6 w-full">
          <Item
            left="2020 — 2021"
            title="MSc. International Business Management at Newcastle University"
            detail="United Kingdom"
          />
        </div>
        <div className="my-9">
          <Item
            left="2012 — 2016"
            title="BA. Telematic systems Engineering at Universidad Católica Santa María la Antigua"
            detail="Panama"
          />
        </div>
      </section>
      <section className="my-16">
        <h3>Volunteering</h3>
        <div className="inline-block pt-6 w-full">
          <Item left="2015" title="Fundación Caminos de Luz" detail="Panama" />
        </div>
      </section>
      <section className="my-16">
        <h3>Contact</h3>
        <div className="inline-block pt-6 w-full">
          <Item
            left="Email"
            title={
              <Link src="mailto:lucas.bozzo@icloud.com">
                lucas.bozzo@icloud.com
              </Link>
            }
          />
        </div>
        <div className="my-4">
          <Item
            left="Github"
            title={<Link src="https://github.com/lbozzo">lbozzo</Link>}
          />
        </div>
        <div className="my-4">
          <Item
            left="Twitter"
            title={<Link src="https://twitter.com/ljbozzo">ljbozzo</Link>}
          />
        </div>
        <div className="my-4">
          <Item
            left="Instagram"
            title={
              <Link src="https://instagram.com/lucasbozzo">lucasbozzo</Link>
            }
          />
        </div>
      </section>
      <section className="my-16">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between w-full">
          <div className="text-[12px] mr-4 my-4">
            {process.env.NEXT_PUBLIC_LAST_UPDATED && (
              <span>
                Last updated{" "}
                {new Date(
                  process.env.NEXT_PUBLIC_LAST_UPDATED
                ).toLocaleDateString()}
              </span>
            )}
          </div>
          <div className="min-w-max w-40">
            <ThemeSelect />
          </div>
        </div>
      </section>
    </div>
  );
}

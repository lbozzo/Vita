import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Item, { ItemList } from "../components/Item";
import Page from "../components/Page";
import Section from "../components/Section";
import Link from "../components/Link";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import BookCover from "../components/BookCover";

const RatingNTag = ({
  rating,
  tag,
}: {
  rating?: 1 | 2 | 3 | 4 | 5;
  tag?: string;
}) => {
  return (
    (rating || tag) && (
      <Flex
        sx={{
          flexDirection: ["row-reverse", null, "column"],
          alignItems: ["center", null, "flex-start"],
          justifyContent: ["flex-end", null, null],
        }}
        paddingTop={1}
      >
        {rating && (
          <Box paddingTop={1}>
            <Rating value={rating} />
          </Box>
        )}

        {tag && (
          <Flex marginTop={[0, 0, 3]} marginRight={3}>
            <Tag>{tag}</Tag>
          </Flex>
        )}
      </Flex>
    )
  );
};

type Book = {
  cover: string;
  title: string;
  author: string;
  href: string;
  detail?: string | React.ReactNode;
  rating?: 1 | 2 | 3 | 4 | 5;
  tag?: string;
};

export default function Readings() {
  const readBooks: Book[] = [
    {
      cover: "/images/book-1.jpg",
      title: "Zero to One: Notes on Start Ups, or How to Build the Future",
      author: "Peter Thiel",
      href: "https://www.goodreads.com/book/show/18050143-zero-to-one",
      rating: 5,
      tag: "Recommended",
    },
    {
      cover: "/images/book-2.jpg",
      title: "8 Lessons in Military Leadership for Entrepreneurs",
      author: "Robert T. Kiyosaki",
      href: "https://www.goodreads.com/book/show/25539731-8-lessons-in-military-leadership",
      rating: 2,
    },
    {
      cover: "/images/book-3.jpg",
      title: "No one understands you, and what to do about it",
      author: "Heidi Grant Halvorson",
      href: "https://www.goodreads.com/book/show/22750285-no-one-understands-you-and-what-to-do-about-it",
      rating: 4,
    },
    {
      cover: "/images/book-5.jpg",
      title:
        "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
      author: "Dan Ariely",
      href: "https://www.goodreads.com/book/show/1713426.Predictably_Irrational",
      rating: 4,
      tag: "Recommended",
    },
  ];
  const upcomingBooks: Book[] = [
    {
      cover: "/images/book-4.jpg",
      title:
        "The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company",
      author: "Robert Iger, Joel Lovell",
      href: "https://www.goodreads.com/book/show/44525305-the-ride-of-a-lifetime",
      detail:
        "The CEO of The Walt Disney Company shares the ideas and values he has used to reinvent one of the most beloved companies in the world, and inspire the people who bring the magic to life.",
    },
    {
      cover: "/images/book-7.jpg",
      title:
        "Never Split the Difference: Negotiating As If Your Life Depended On It",
      author: "Chris Voss, Tahl Raz",
      href: "https://www.goodreads.com/book/show/26156469-never-split-the-difference",
      detail:
        "A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home.",
    },
    {
      cover: "/images/book-6.jpg",
      title:
        "The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
      author: "Gary Keller, Jay Papasan ",
      href: "https://www.goodreads.com/book/show/16256798-the-one-thing",
      detail:
        "The One Thing explains the success habit to overcome the six lies that block our success, beat the seven thieves that steal time, and leverage the laws of purpose, priority, and productivity.",
    },
  ];
  return (
    <Page>
      <Heading sx={{ fontSize: 26, lineHeight: 1 }}>Readings</Heading>
      <Box marginTop={2}>
        <Text>
          In 2020 I decided to read at least 12 books per year. These are some
          of the books I&apos;ve read so far.
        </Text>
      </Box>
      <Section>
        <Heading as="h3">On Shelf</Heading>
        <ItemList
          data={[
            {
              cover: "/images/reading.jpeg",
              href: "https://www.goodreads.com/book/show/52578297-the-midnight-library",
              title: "The Midnight Library",
              author: "Matt Haig",
              detail:
                "Between life and death there is a library, and within that library, the shelves go on forever.",
              tag: "Goodreads choice winner",
            },
          ]}
          renderItem={({ cover, href, title, author, detail, tag }, key) => (
            <Item
              key={key}
              left={<BookCover src={cover} />}
              title={
                <Link href={href}>
                  {title} by {author}
                </Link>
              }
              detail={
                <>
                  {detail}
                  {RatingNTag({ tag })}
                </>
              }
            />
          )}
        ></ItemList>
      </Section>
      <Section>
        <Heading as="h3">Read</Heading>
        <ItemList
          data={readBooks}
          renderItem={({ cover, title, author, href, rating, tag }, key) => (
            <Item
              key={key}
              left={<BookCover src={cover} />}
              title={
                <Link href={href}>
                  {title} by {author}
                </Link>
              }
              detail={RatingNTag({ rating, tag })}
            />
          )}
          enablePagination
          pageSize={2}
        />
      </Section>
      <Section>
        <Heading as="h3">Upcoming readings</Heading>
        <ItemList
          data={upcomingBooks}
          renderItem={({ cover, title, author, href, detail }, key) => (
            <Item
              key={key}
              left={<BookCover src={cover} />}
              title={
                <Link href={href}>
                  {title} by {author}
                </Link>
              }
              detail={detail}
            />
          )}
          enablePagination
          pageSize={1}
        />
      </Section>
    </Page>
  );
}

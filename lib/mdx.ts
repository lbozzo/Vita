import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const root = process.cwd();

interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export interface MDX<ItemT> {
  content: string;
  data: ItemT;
  wordCount: number;
  readintTime: IReadTimeResults;
}

export function getFiles(type: string) {
  const fileNames = fs.readdirSync(path.join(root, "data", type));
  return fileNames.map((fileName) => {
    const { content, data } = matter(
      fs.readFileSync(path.join(root, "data", type, fileName), "utf8")
    );
    return {
      content,
      data,
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
    };
  });
}

export function getTypes() {
  console.log(fs.readdirSync(path.join(root, "data")));
}

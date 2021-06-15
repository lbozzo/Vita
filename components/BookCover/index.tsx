/** @jsxImportSource theme-ui */
import Image, { ImageProps } from "next/image";
import { FC } from "react";

const BookCover: FC<Pick<ImageProps, "src">> = ({ src }) => (
  <Image
    src={src}
    layout="fixed"
    width="100%"
    height={155}
    objectFit="cover"
    sx={{
      borderRadius: 4,
      overflow: "hidden",
    }}
  />
);

export default BookCover;

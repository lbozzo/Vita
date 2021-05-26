import { Box } from "@theme-ui/components";
import { FC } from "react";

interface TagProps {
  children: string;
}

const Tag: FC<TagProps> = ({ children }) => {
  return (
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
      {children}
    </Box>
  );
};
export default Tag;

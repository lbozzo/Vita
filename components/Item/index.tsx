import { FC, ReactNode } from "react";

type ItemProps = {
  left: ReactNode | string;
  title: ReactNode | string;
  detail?: string;
};

const Item: FC<ItemProps> = ({ left, title, detail }) => {
  return (
    <div className="flex flex-col md:flex-row ml-4 md:ml-0">
      <div className="w-[15ch] mr-9 text-gray-400 dark:text-gray-300">
        {left}
      </div>
      <div className="w-full">
        <div className="text-gray-800 dark:text-gray-100">{title}</div>
        {detail && <div>{detail}</div>}
      </div>
    </div>
  );
};

export default Item;

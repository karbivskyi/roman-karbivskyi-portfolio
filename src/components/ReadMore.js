import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

const ReadMore = ({ children, length }) => {
  const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };
  const isMoreThan200 = text.length > length;
  const readmoreBtn = (
    <button
      onClick={toggleBtn}
      className="btn btn-md bg-transparent border border-accent mt-5 text-[14px] hover:border-transparent rounded transition-all duration-1000 delay-75 cursor-pointer"
    >
      {isReadMoreShown ? "read less " : "read more "} {isReadMoreShown ? <ChevronUpIcon className="text-right ml-3" width={16} /> : <ChevronDownIcon width={16} className="text-right ml-3" />}
    </button>
  );
  return (
    <div>
      {isReadMoreShown ? text : text.substr(0, length)}
      {isMoreThan200 ? readmoreBtn : ""}
    </div>
  );
};

export default ReadMore;

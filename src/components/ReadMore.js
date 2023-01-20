import React, { useState } from "react";

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
      className="btn btn-md bg-transparent border border-accent mt-5 text-[14px] hover:border-transparent rounded hover:bg-accent-hover transition-all cursor-pointer"
    >
      {isReadMoreShown ? "read less" : "read more"}
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

import React from "react";

const TagPre = ({ value }) => {
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
};

export default TagPre;

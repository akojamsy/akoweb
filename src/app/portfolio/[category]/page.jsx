import React from "react";

const Category = ({ params }) => {
  console.log(params);
  return <div>{params?.category}</div>;
};

export default Category;

import React from "react";
import Card from "./Card";

const Cards = ({ practiceData }) => {
  return (
    <div>
      {practiceData?.map((data, i) => (
        <div key={i}>
          <Card practiceData={data}></Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;

import React from "react";
import Button from "./Button";

const ButtonsData = [
  "All",
  "Live",
  "News",
  "Podcasts",
  "Music",
  "Live television",
  "Chief ministers",
  "Mixes",
  "Information Technology",
  "industry",
];
function ButtonList() {
  return (
    <div className="flex m-2.5 p-2.5">
      {ButtonsData.map((btnname,index) => (
        <Button key={index} name={btnname} />
      ))}
    </div>
  );
}

export default ButtonList;

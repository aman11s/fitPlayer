import React, { useState } from "react";
import "./ChipSection.css";

const chipsList = [
  { id: 1, name: "All" },
  { id: 2, name: "Weightlifting" },
  { id: 3, name: "Yoga" },
  { id: 4, name: "Diet" },
  { id: 5, name: "Zumba" },
];

export const ChipSection = ({ name }) => {
  const [categoryName, setCategoryName] = useState("All");
  return (
    <>
      {chipsList.map(({ id, name }) => {
        return (
          <div
            onClick={() => setCategoryName(name)}
            className={`chip mx-2 ${categoryName === name && "chip-active"}`}
            key={id}
          >
            {name}
          </div>
        );
      })}
    </>
  );
};

// {
//   chipsList.map(({ id, name }) => {
//     return <ChipSection key={id} name={name} />;
//   });
// }

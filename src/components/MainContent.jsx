import React from "react";

export default function Main() {
  return (
    <div className="bg-[#282D35] text-[#FFFFFF] px-5 pt-14 pb-28 relative overflow-hidden">
      <h1 className="font-bold text-4xl">Fun Facts about React</h1>
      <ul className="text-base font-normal list-disc list-inside pt-10 px-6 space-y-3">
        <li className="list-item-marker">Was first released in 2013</li>
        <li className="list-item-marker">
          Was originally created by Jordan Walke
        </li>
        <li className="list-item-marker">Has well over 100K stars on GitHub</li>
        <li className="list-item-marker">Is maintained by Meta</li>
        <li className="list-item-marker">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <img
        src="./src/assets/react-icon-big.png"
        alt=""
        className="absolute top-16 -right-1/4 w-64"
      />
    </div>
  );
}

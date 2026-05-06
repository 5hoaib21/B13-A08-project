import { Button } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const NewArrivals = () => {
  return (
    <div>
      <Marquee
      pauseOnHover={true}
      speed={150}
      >
      <button className="btn bg-pink-200 mr-2">New Arrivals:</button>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default NewArrivals;

import "animate.css";
import Link from "next/link";
import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";


const Banner = () => {
  return (
 
    <div>
      <div className="container mx-auto bg-zinc-200 text-black my-5 rounded">
        <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight 
                        animate__animated animate__slideInDown"
          >
          {/* animate__backInLeft */}
            Discover Your{" "}
            <span
              className="text-purple-500 inline-block 
                        animate__animated animate__flipInX animate__delay-1s"
            >
              Perfect Aesthetic
            </span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl">
       Premium tiles designed for modern homes, offices, and luxury interiors. Discover elegant styles that perfectly match your space and personality.
          </p>
          <Link href="/all-tiles">
            <button className="mt-8 bg-amber-400 text-black px-6 py-3 rounded font-semibold hover:bg-amber-500 transition flex items-center gap-4  ">
              Browse Now <MdOutlineTravelExplore />
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;

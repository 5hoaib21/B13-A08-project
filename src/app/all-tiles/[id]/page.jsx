import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

const ViewDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://tiles-gallery-server-xt5y.onrender.com/tiles`,
  );
  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);
  console.log(tile);

  return (
    <div>
      <div className="border shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl m-4 lg:m-12">
        <div className="flex flex-col lg:flex-row gap-10 p-5 border">
          <div className="relative  lg:w-175 lg:h-175 aspect-square">
            <Image
              src={tile.image}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={tile.title}
              className=" object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-5">
         <div>
             <h2 className="text-2xl lg:text-4xl font-semibold">
              Title :{" "}
              <span className="font-bold text-zinc-600">{tile.title}</span>
            </h2>
            <p className="text-xl font-semibold">{tile.description}</p>
         </div>

            <p className="text-xl font-bold">
              Dimensions :{" "}
              <span className="font-semibold">{tile.dimensions}</span>
            </p>
            <p className="text-xl font-bold">
              Material : <span className="font-semibold">{tile.material}</span>
            </p>
            <p className="text-xl font-bold">
              Price :{" "}
              <span className="font-semibold">
                ${tile.price} {tile.currency}
              </span>
            </p>
            <p className="text-xl font-bold">
              Category : <span className="font-semibold">{tile.category}</span>
            </p>
            <p className="text-xl font-bold">
              isStack :{" "}
              <span className="font-semibold">{`${tile.inStock === true ? "Available" : "Not Available"}`}</span>
            </p>
            <div className=" flex items-center  gap-5">
              <Link href={""}>
                <Button variant="tertiary" className={"rounded"}>
                  <BiAddToQueue /> ADD To Cart
                </Button>
              </Link>
              <Link href={"/all-tiles"}>
                <Button variant="secondary" className={"rounded"}>
                  <FaArrowLeft />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;

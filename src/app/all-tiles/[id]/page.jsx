
import { Card } from "@heroui/react";
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
    <div className="w-11/12 mx-auto mt-9">
      <div className="flex gap-5 bg-base-100 shadow-sm">
        <div className="">
          <Image src={tile.image} alt="Album" height={600} width={500} />
        </div>

        <div className="mt-7">
          <h2 className="">{tile.title}</h2>
          <p className="text-xl font-semibold">{tile.description}</p>
          <p className="text-xl font-bold">
            Dimensions : <span className="text-xs">{tile.dimensions}</span>
          </p>

          <p className="text-xl font-bold">
            Material : <span className="font-semibold">{tile.material}</span>
          </p>

          <p className="text-xl font-bold">
            Category : <span className="font-semibold">{tile.category}</span>
          </p>
          <p className="text-xl font-bold">
            isStack :{" "}
            <span className={`font-semibold ${tile.inStock === true ?'text-green-500 font-bold': 'text-red-500'}`}>{`${tile.inStock === true ? "Available" : "Not Available"}`}</span>
          </p>
          <p className="text-xl font-bold">
            Price :{" "}
            <span className="font-semibold">
              ${tile.price} {tile.currency}
            </span>
          </p>
          <div className="flex gap-3 mt-5">
            <Link href={'/all-tiles'}>
              <button className="btn btn-primary">Back</button>
            </Link>
            <Link href={'/'}>
              <button className="btn btn-primary">Add TO Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;

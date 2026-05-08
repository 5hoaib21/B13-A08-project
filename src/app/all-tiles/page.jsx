"use client";

import TileCard from "@/components/pages/TileCard";
import NoTiles from "@/components/ui/NoTiles";
import { Input } from "@heroui/react";
import React, { useEffect, useState } from "react";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getTiles = async () => {
      const res = await fetch(
        "https://tiles-gallery-server-xt5y.onrender.com/tiles",
        {
          cache: "no-cache",
        }
      );

      const data = await res.json();
      setTiles(data);
    };

    getTiles();
  }, []);

  // search filter
  const filteredTiles = tiles.filter((tile) =>
    tile.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5">
        All Tiles
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search your dreams..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
        {/* <Input 
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Name" 
        className="w-64" 
        placeholder="Enter your name" /> */}
      </div>

      {filteredTiles.length === 0 ? (
        <NoTiles />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredTiles.map((tile) => (
            <TileCard tile={tile} key={tile.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;
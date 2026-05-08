import React from "react";

const NoTiles = () => {
  return (
    <div>
      <div className="text-center py-20">
        <p className="text-2xl text-zinc-400">No Tiles Found</p>
        <p className="text-zinc-500 mt-2">
          Try different search terms or category
        </p>
      </div>
    </div>
  );
};

export default NoTiles;

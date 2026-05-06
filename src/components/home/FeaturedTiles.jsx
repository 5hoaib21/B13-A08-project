import TileCard from "../pages/TileCard";

const FeaturedTiles = async () => {
  const res = await fetch(
    `https://tiles-gallery-server-xt5y.onrender.com/tiles`,
  );
  const tiles = await res.json();
  // console.log(tiles);

  const topTiles = tiles.slice(0, 4);
  // console.log(topTiles);

  return <div className="w-11/12 mx-auto">
    <div className="mt-9">
      <h1 className="text-2xl font-bold mt-5">Most Demandable</h1>
      <div className="grid grid-cols-4 gap-2 mt-9">
        {
          topTiles.map(tile => {
            
            return <TileCard 
            key={tile.id}
            tile={tile}
             />
          
            })
        }
      </div>
    </div>
  </div>;
};

export default FeaturedTiles;

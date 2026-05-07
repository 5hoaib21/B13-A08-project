import TileCard from "@/components/pages/TileCard";


const AllTilesPage = async () => {
  const res = await fetch(`https://tiles-gallery-server-xt5y.onrender.com/tiles`);
  const tiles = await res.json();

  return (
    <div className="w-11/12 mx-auto">
    <h1 className="text-4xl font-bold text-center my-5">All Tiles</h1>
    <div className="grid grid-cols-4 gap-2">
      {
        tiles.map(tile => <TileCard tile={tile} key={tile.id}/>)
      }
    </div>
    </div>
  );
};

export default AllTilesPage;
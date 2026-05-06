const FeaturedTiles = async () => {
  const res = await fetch(
    `https://tiles-gallery-server-xt5y.onrender.com/tiles`,
  );
  const tiles = await res.json();
  // console.log(tiles);

  const topTiles = tiles.slice(0, 4);
  // console.log(topTiles);

  return <div className="w-11/12 mx-auto">
    <div>
      <h1 className="text-2xl font-bold mt-5">Most Demandable</h1>
      <div>
        {
          topTiles.map(tile => {
            
            return <div key={tile.id}>
              {tile.title}
            </div>
            })
        }
      </div>
    </div>
  </div>;
};

export default FeaturedTiles;

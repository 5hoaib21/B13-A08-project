import { Button } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";


const topping = [

  { "id": 1, "title": "New Arrival: Ceramic Blue Premium Tiles" },
  { "id": 2, "title": "Luxury Collection: Marble White Floor Tiles" },
  { "id": 3, "title": "Modern Style: Marble Black Polished Tiles" },
  { "id": 4, "title": "Natural Look: Wood Finish Designer Tiles" },
  { "id": 5, "title": "Trending Now: Glossy Grey Floor Tiles" },
  { "id": 6, "title": "Rustic Charm: Brown Texture Tiles" },
  { "id": 7, "title": "Elegant Choice: Beige Stone Tiles" },
  { "id": 8, "title": "Artistic Touch: Mosaic Pattern Tiles" },
  { "id": 9, "title": "Minimal Style: Matte Black Tiles" },
  { "id": 10, "title": "Outdoor Pro: Anti-slip Safety Tiles" },
  { "id": 11, "title": "Premium Finish: Ivory Polished Tiles" },
  { "id": 12, "title": "Classic Feel: Terracotta Floor Tiles" },
  { "id": 13, "title": "Modern Shine: Glass Finish Wall Tiles" },
  { "id": 14, "title": "Industrial Look: Textured Cement Tiles" },
  { "id": 15, "title": "Creative Design: Hexagon Pattern Tiles" },
  { "id": 16, "title": "Strong Build: Granite Outdoor Tiles" },
  { "id": 17, "title": "Soft Aesthetic: Pink Wall Tiles" },
  { "id": 18, "title": "Natural Beauty: Pebble Stone Tiles" },
  { "id": 19, "title": "Warm Tone: Dark Brown Matte Tiles" },
  { "id": 20, "title": "Luxury Series: Onyx Gloss Finish Tiles" }

]



const NewArrivals = () => {
  return (
    <div className="w-11/12 mx-auto rounded-lg  flex  text-white bg-zinc-800">
      <button className="btn bg-pink-200 mr-2">New Arrivals:</button>
      <Marquee
      pauseOnHover={true}
      speed={150}
      >
     {topping.map(topBreaking => {
      return <p key={topBreaking.id}> {topBreaking.title}</p>
     })}
      </Marquee>
    </div>
  );
};

export default NewArrivals;

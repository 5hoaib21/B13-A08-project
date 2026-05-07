import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  // console.log(tile);
  return (
    <Card className="border border-zinc-200 rounded-2xl shadow-2xl hover:shadow">
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl shadow-xl"
        />
        <Chip color="success" className="absolute right-2 top-2">
          {tile.category}
        </Chip>
      </div>
      <div className="text-center space-y-1">
        <h2 className="font-bold text-2xl text-black">{tile.title}</h2>
      </div>
      <Link href={`all-tiles/${tile.id}`}>
        <Button variant="outline" className={"w-full font-bold"}>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default TileCard;

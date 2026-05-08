'use client'
import { Button, Input } from "@heroui/react";
import { cleanStores } from "better-auth/react";
import { useState } from "react";
export function Search({ tiles }) {
  // console.log(tiles);
  const [searchingInput, setSearchInput] = useState('')
  const handleSearch = () => {
    const expectedTiles = tiles.filter(tile => tile.title.toLowerCase().includes(searchingInput.toLowerCase())
  )
  
  console.log(expectedTiles,'expectedTiles');
  }
  //  console.log('searchingInput',searchingInput);
  return (
    <>
      <Input
      value={searchingInput}
      onChange={e => setSearchInput(e.target.value)}
        aria-label="Name"
        className="w-64"
        placeholder="Search your Tiles"
      />
      <Button onClick={handleSearch}>search</Button>
    </>
  );
}

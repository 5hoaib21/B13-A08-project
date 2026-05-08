"use client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";


import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {

  const userData = authClient.useSession()
  const user = userData.data?.user
  const handleSignOut =async () => {
    await authClient.signOut()
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
            <NavLink href={"/profile"}>Profile</NavLink>
            { !user && <NavLink href={"/signin"}>Sign in</NavLink>}
           {user && <NavLink href={''}><Button variant="danger" onClick={handleSignOut}>SignOut</Button></NavLink>}
          
          </ul>
        </div>
        <Link href={"/"}>
          <h1 className="text-xl lg:text-2xl  font-bold">Tiles Gallery</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          <NavLink href={"/profile"}>Profile</NavLink>
        </ul>
      </div>
    <div className="navbar-end">
       {!user && <Link href={"/signin"}>
          <Button className={"rounded hidden lg:flex"}>Sign in</Button>
        </Link>}

    {user &&  <div className=" items-center gap-2 hidden lg:flex">
      <h2 className="text-xs">{user?.name}</h2>
       <Link href={'/profile'}>
         <Avatar>
        <Avatar.Image 
        alt={user?.name} 
        src={user?.image}
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
       </Link>
     <Button 
     size="sm" 
     variant="danger-soft"
     onClick={handleSignOut}
     >SignOut</Button>
      </div>
    }

      </div>
    </div>
  );
};

export default Navbar;

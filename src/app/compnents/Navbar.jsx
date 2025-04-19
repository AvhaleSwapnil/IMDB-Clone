import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div className="flex bg-amber-500  p-4 lg:text-lg justify-center items-center gap-4">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

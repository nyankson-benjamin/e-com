import React from "react";
import AppsBar from "../TopBar/AppBar";
import useScreenWidth from "../Hooks/useScreenWidth";
export default function Blogs() {
  const [screenWidth] = useScreenWidth();
  return (
    <div>
      <AppsBar />
      <p>Blogs</p>
    </div>
  );
}

import React from "react";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/list";

const Movies = () => {
  return (
    <div className="movies">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Movies;

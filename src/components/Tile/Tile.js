import React from "react";
import "./Tile.css";

const Tile = ({ name, background, description, gh, deploy }) => {
  return (
    <div
      className="tile"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="tile-overlay">
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={gh}>GitHub</a>
        <a href={deploy}>Heroku</a>
      </div>
    </div>
  );
};

export default Tile;

import React from "react";
import "./Tile.css";

const Tile = ({
  name,
  background,
  summary,
  gh,
  deploy,
  setPostActive,
  setActivePost,
}) => {
  const setPostContent = () => {
    setPostActive(true);
    setActivePost({
      name: name,
    });
  };

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
        <p>{summary}</p>
        <a href={gh}>GitHub</a>
        {deploy && <a href={deploy}>Deployed</a>}
      </div>
    </div>
  );
};

export default Tile;

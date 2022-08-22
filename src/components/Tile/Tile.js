import React from "react";
import "./Tile.css";

const Tile = ({
  name,
  background,
  description,
  summary,
  gh,
  deploy,
  setActivePost,
}) => {
  const setActivePostFunc = () => {
    setActivePost({
      name: name,
      background: background,
      summary: summary,
      description: description,
      gh: gh,
      deploy: deploy,
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
      onClick={() => setActivePostFunc()}
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

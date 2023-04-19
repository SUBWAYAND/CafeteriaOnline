import React from "react";
import videoPlayer from "../../image/noche.mp4";

export const Inicio = () => {
  return (
    <main id="hero">
      <div className="promo">
        <h1 className="uno">
          En una bonita historia, siempre hay una taza de café
        </h1>
      </div>
      <video muted autoPlay loop>
        <source src={videoPlayer} type="video/mp4" />
      </video>
      <div className="capa"></div>
    </main>
  );
};

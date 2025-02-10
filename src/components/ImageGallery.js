import React from "react";
import div1 from "../assets/div1.jpg";
import div2 from "../assets/div2.jpg";
import div3 from "../assets/div3.jpg";
import div4 from "../assets/div4.jpg";

const ImageGallery = ({ openTheaterMode }) => {
  const images = [div1, div2, div3, div4];

  return (
    <div className="image-container d-flex justify-content-center gap-3 flex-wrap">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          className="image rounded shadow"
          style={{ maxWidth: "200px", cursor: "pointer" }}
          onClick={() => openTheaterMode(image)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

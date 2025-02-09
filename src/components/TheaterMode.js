import React from "react";

const TheaterMode = ({ image, closeTheaterMode }) => {
  return (
    <div
      className="theater-mode d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1000,
      }}
    >
      {/* Close Button */}
      <button
        className="close-btn btn btn-light"
        onClick={closeTheaterMode}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "2rem",
          zIndex: 1001,
        }}
      >
        &times;
      </button>

      {/* Fullscreen Image */}
      <img
        src={image}
        alt="Fullscreen"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
          borderRadius: "10px",
          boxShadow: "0px 8px 12px rgba(255, 255, 255, 0.2)",
        }}
      />
    </div>
  );
};

export default TheaterMode;

import React from "react";
import div2 from "../assets/div2.jpg";

const Hero = ({ showTab }) => {
  return (
    <div className="hero text-center p-4">
<h1
  className="name"
  style={{
    color: "white",
    fontWeight: "bold", // Makes the text strong
  }}
>
  కాండ్రేగుల దివ్య తేజస్వి
</h1>
      {/* Profile Image */}
      <div className="image-container">
        <img
          src={div2}
          alt="Divya"
          className="rounded-circle border border-3 border-white"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Divider */}
      <div className="divider mx-auto my-4"></div>

      {/* Tabs */}
      <div className="tabs d-flex justify-content-center gap-3 mt-3">
        <button
          className="btn btn-light text-dark px-4 py-2"
          onClick={() => showTab("personal")}
        >
          వ్యక్తిగత వివరాలు
        </button>
        <button
          className="btn btn-light text-dark px-4 py-2"
          onClick={() => showTab("family")}
        >
          కుటుంబ వివరాలు
        </button>
        <button
          className="btn btn-light text-dark px-4 py-2"
          onClick={() => showTab("contact")}
        >
          సంప్రదింపు
        </button>
        <button
          className="btn btn-light text-dark px-4 py-2"
          onClick={() => showTab("images")}
        >
          చిత్రాలు
        </button>
      </div>
    </div>
  );
};

export default Hero;

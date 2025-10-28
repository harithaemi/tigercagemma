import React, { useState } from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";
import g12 from "../assets/g12.jpg";
const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [g1, g2, g3, g10, g11, g12, g4, g5, g6, g7,g9 ];

  return (
    <div className="relative bg-black p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h1 className="text-[#ff0000] text-3xl md:text-4xl font-bold mb-6 text-center">
        GALLERY
      </h1>

      {/* Image Grid Container */}
      <div className="relative w-full max-w-5xl overflow-hidden mt-8 transition-all duration-700 ease-in-out">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ease-in-out"
          style={{
            maxHeight: showAll ? "none" : "250px", // show only half of the first image initially
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-black flex items-center justify-center shadow-lg"
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Black gradient overlay when not expanded */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* See More / See Less Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 px-8 py-3 rounded-full border border-white text-white font-semibold transition-all hover:scale-105"
      >
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Gallery;









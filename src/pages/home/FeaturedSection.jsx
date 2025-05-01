import React from 'react';
import instacart from "../../assets/images/instacart.png"
import cocacola from "../../assets/images/cokacola.png"
import microsoft from "../../assets/images/microsoft.png"
import davidthomas from "../../assets/images/david.png"
import adobe from "../../assets/images/Adobe.png"

// Sample logos — replace with actual image URLs or imported assets
const brands = [
  instacart,
  cocacola,
  microsoft,
  davidthomas,
  adobe,
];

const FeaturedSection = () => {
  return (
    <div className="w-full mx-auto px-3 lg:px-0 py-8 lg:py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[60px] font-semibold">Featured on</h2>
        <p className="text-[#797979] text-[18px] mt-2">Read about our latest updates</p>
      </div>

      {/* Grid of logos */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {[...brands, ...brands].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`brand-${index}`}
            className="h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

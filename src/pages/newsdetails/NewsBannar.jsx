import React from "react";
import Bannar from "../../assets/images/gallery1.jpg";

const NewsBannar = () => {
  return (
    <div className="relative w-full h-[230px] md:h-[509px] mt-7 overflow-hidden rounded-[29px]">
      {/* Background Image */}
      <img
        src={Bannar}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default NewsBannar;

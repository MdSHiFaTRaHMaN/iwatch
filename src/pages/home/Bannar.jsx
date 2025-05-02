import React from "react";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannarImg from "../../assets/images/bannarm.jpg";
// This function returns a banner component
const Bannar = () => {
  // This object defines the responsive settings for the carousel
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  // This array contains the images for the carousel
  const slides = [
    {
      id: 1,
      image: BannarImg,
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9", // Replace with your own
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475", // Replace with your own
      alt: "Slide 3",
    },
  ];

  // This returns the banner component
  return (
    <section className="bg-[#E5F5F4] py-6 px-2 lg:px-[20px] mx-auto m-4 mt-0 lg:mt-3 rounded-xl top-0">
      <div className="">
        <div className="text-center mx-auto pt-[50px] py-[30px] lg:py-[70px]">
          <h1 className="text-3xl md:text-[56px] md:leading-[76px] font-bold text-gray-900">
            Igniting Productivity
            <br />
            for Individuals and Teams
          </h1>
        </div>

        <div
          className="w-fullx-auto"
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            responsive={responsive}
            showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            arrows={false}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            renderDotsOutside
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full lg:w-[1320px] mx-auto h-[250px] md:h-[350px] lg:h-[618px] object-cover rounded-[27px] shadow-lg"
                />
                <div className="absolute bottom-6 right-6">
                  <button className="bg-[#00878C] hover:!bg-[#00878C] !text-white rounded-full py-[16px] px-[30px] !text-[16px] leading-6 !font-bold border-none">
                    Explore App
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Bannar;

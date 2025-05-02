import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mobile from "../../assets/images/mobilebgimage.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TopProduct = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 2,
      partialVisibilityGutter: 150,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2,
      partialVisibilityGutter: 150,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const apps = [
    {
      title: "Reddy",
      description:
        "AI Watch Assistants lets you create a personalized assistant for iPhone and Apple Watch smart help, anytime, anywhere.",
      bgColor: "bg-teal-700",
      btnColor: "bg-white text-teal-700",
      btnText: "TRY IT NOW",
      image: Mobile,
    },
    {
      title: "iWatch Pdf Viewer",
      description:
        "Easily create, import, and view PDFs offline on your Apple Watch with our simple iPhone app.",
      bgColor: "bg-orange-500",
      btnColor: "bg-white text-orange-600",
      btnText: "TRY IT NOW",
      image: Mobile,
    },
    {
      title: "WaMusic",
      description:
        "WaMusic is your all-in-one app to manage music and videos offline on Apple Watch.",
      bgColor: "bg-red-600",
      btnColor: "bg-white text-red-600",
      btnText: "TRY IT NOW",
      image: Mobile,
    },
    {
      title: "WaMusic",
      description:
        "WaMusic is your all-in-one app to manage music and videos offline on Apple Watch.",
      bgColor: "bg-blue-600",
      btnColor: "bg-white text-red-600",
      btnText: "TRY IT NOW",
      image: Mobile,
    },
  ];

  return (
    <div className="bg-white px-2 md:px-11 py-10">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[21px] ml-2 lg:text-[60px] font-semibold text-gray-900">
            Top productivity apps
          </h2>
        </div>

        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<CustomArrows />}
          renderButtonGroupOutside
          itemClass="mr-[30px]"
          swipeable
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className="pr-[30px]"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
        >
          {apps.map((app, idx) => (
            <div
              key={idx}
              className={`${app.bgColor} text-white p-5 rounded-[19px] h-[480px] flex flex-col justify-between relative overflow-hidden`}
              // className={`${app.bgColor} text-white p-5 rounded-[19px] w-[499px] h-[570px] flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="z-10 relative">
                <h3 className="text-[24px] px-7 md:text-[36px] font-[600] mb-4">
                  {app.title}
                </h3>
                <p className="text-lg px-7">{app.description}</p>
                <button className="mt-[138px] md:mt-[198px] flex items-center gap-2 text-[14px] font-semibold border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-teal-700 transition">
                  {app.btnText}
                  <span className="bg-white text-teal-700 rounded-full p-3">
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>

              <div className="absolute flex gap-2 z-0 opacity-50 mt-[130px] py-3">
                <img
                  src={app.image}
                  alt=""
                  className="w-[320px] md:w-[320px] lg:w-[450px]"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const CustomArrows = ({ next, previous }) => {
  return (
    <div className="absolute right-0 flex space-x-2 mr-[20px] md:mr-[30px] lg:mr-[120px] z-10 -mt-[470px] lg:-mt-[570px]">
      <button
        onClick={previous}
        className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-100 flex items-center justify-center"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={next}
        className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-100 flex items-center justify-center"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default TopProduct;

import { Card } from "antd";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Gallery1 from "../../assets/images/gallery1.jpg";
import Gallery2 from "../../assets/images/gallery2.jpg";
import Gallery3 from "../../assets/images/gallery3.jpg";
import { Link } from "react-router-dom";

const newsData = [
  {
    title: "Designing User-Friendly and interactive Smartwatch Interfaces",
    image: Gallery1, // replace with actual path
    isLarge: true,
  },
  {
    title: "Designing User-Friendly Smartwatch...",
    image: Gallery2, // replace with actual path
    isLarge: false,
  },
  {
    title: "Designing User-Friendly Smartwatch...",
    image: Gallery3, // replace with actual path
    isLarge: false,
  },
];

const LatestNews = () => {
  return (
    <div className="w-full mx-auto px-3 lg:px-7 py-0 lg:py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-[60px] font-semibold mb-2">Latest news and updates</h2>
        <p className="text-[#797979] mt-[28px] text-lg">Read about our latest updates</p>
      </div>

      {/* Grid */}
      <div className="grid lg:flex items-center gap-[30px] ">
        {/* First Large Card */}
        <div className="w-[400px] lg:w-[757px] h-[450px] lg:h-[740px]">
          <Link to="/news-details">
            <div className="relative rounded-lg lg:rounded-2xl overflow-hidden h-full">
              <img
                src={newsData[0].image}
                alt="News"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
                <h3 className="text-2xl lg:text-[45px] font-bold leading-snug">
                Designing User-Friendly and interactive Smartwatch <br /> Interfaces
                </h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Smaller Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-[533px] h-[450px] lg:h-[740px]">
          {newsData.slice(1).map((news, index) => (
            <Link to="/news-details">
              <Card
                key={index}
                cover={
                  <img
                    alt="news thumbnail"
                    src={news.image}
                    className="h-[300px] object-cover rounded-none lg:!rounded-2xl"
                  />
                }
                className="cursor-pointer rounded-2xl !shadow-none"
                bodyStyle={{ padding: "12px" }}
                bordered={false}
                
              >
                <h4 className="text-[20px] lg:text-[30px] font-[600] whitespace-nowrap">{news.title}</h4>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

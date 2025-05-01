import React from "react";
import NewsImage from "../../assets/images/news2.jpg";
import { HiOutlinePlay } from "react-icons/hi";
const SecondNews = () => {
  return (
    <div className="mx-auto lg:px-0 py-2 space-y-10">
      {/* Video Thumbnail with Play Button */}
      <div className="relative w-full overflow-hidden rounded-[29px]">
        <img
          src={NewsImage}
          alt="Video thumbnail"
          className="w-full h-[240px] lg:h-[650px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
            <HiOutlinePlay className="text-teal-500 text-4xl" />
          </button>
        </div>
      </div>

      {/* Paragraphs */}
      <div className="space-y-4 text-[#000000] text-lg leading-[28px] pb-14">
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna arcu velit vitae nulla.
          Euismod elementum arcu ac ipsum. Facilisi condimentum eu enim viverra
          eu et. Rhoncus viverra bibendum eleifend tortor eget a.
        </p>
        <p>
          Ullamcorper donec velit volutpat aliquet dictumst. Adipiscing
          vestibulum odio at magna. Et vivamus ut dui sapien egestas tellus id
          elit in. Urna nec sed felis justo elit cras auctor euismod netus. Nam
          condimentum feugiat massa vitae. Nisi libero sociis pulvinar ornare
          nunc arcu. Sed habitant platea odio odio feugiat enim quam morbi.
          Mauris cursus aliquet massa malesuada enim quis aenean magnis.
          Imperdiet turpis tincidunt sed lacus ornare senectus. Consectetur
          ipsum at turpis pulvinar. Leo egestas arcu at elit fermentum eros.
        </p>
        <p>
          Vitae ac lectus sed eu blandit eget. Imperdiet euismod platea lectus
          viverra enim vulputate ut interdum nibh. Egestas vitae eget in amet
          mauris nullam sed. Non tellus ornare leo pulvinar in. Viverra sit
          malesuada faucibus aliquet lacus porttitor pellentesque donec ipsum.
          Scelerisque aliquam urna est feugiat varius sed. Lorem pharetra
          placerat nunc eget amet. Interdum ipsum vestibulum eget tortor. Sit id
          tellus mauris netus eu elit integer a. Lectus mollis enim a massa
          lectus. Enim mattis massa odio diam euismod tempor sed id dolor.
        </p>
        <p>
          Ac mattis sollicitudin morbi dignissim. Lectus consectetur id nunc
          vulputate. Cursus nisi est nunc tortor viverra dolor amet. Cursus et
          aliquet.
        </p>
      </div>
    </div>
  );
};

export default SecondNews;

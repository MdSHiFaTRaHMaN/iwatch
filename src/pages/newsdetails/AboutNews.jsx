import React from "react";
import { Tag } from "antd";

const tags = ["E-COMMERCE", "FINTECH", "E-COMMERCE"];

const AboutNews = () => {
  return (
    <div className="px-1 lg:px-0 py-10 space-y-3">
      {/* Date */}
      <div className="text-[#797979] text-[24px] leading-[32px] mb-7">May 19, 2023</div>

      {/* Tags */}
      <div className="space-x-1 space-y-2">
        {tags.map((tag, index) => (
          <button key={index} className="bg-[#E5F5F4] rounded-full p-3 text-xs font-bold text-[#797979]">
            {tag}
          </button>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-6xl font-semibold leading-tight">
        Designing User-Friendly Smartwatch <br /> Interfaces
      </h1>

      {/* Paragraphs */}
      <div className="space-y-4 text-[#000000] text-lg leading-[28px]">
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

      {/* Duplicate Section */}
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight mt-12">
        Designing User-Friendly Smartwatch Interfaces
      </h1>
      <div className="space-y-4 text-[#000000] text-lg leading-[28px]">
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

export default AboutNews;

import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full py-7 lg:h-[80vh] bg-gradient-to-bl from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white rounded-xl">
      <h1 className="text-2xl lg:text-5xl">
        We are <b>Almost</b> there!
      </h1>
      <p className="mt-2 text-lg uppercase tracking-widest">Coming Soon</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20">
        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{timeLeft.days ?? "0"}</p>
          <hr />
          <p className="px-10 py-5">days</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{timeLeft.hours ?? "0"}</p>
          <hr />
          <p className="px-10 py-5">hours</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{timeLeft.minutes ?? "0"}</p>
          <hr />
          <p className="px-10 py-5">mins</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{timeLeft.seconds ?? "0"}</p>
          <hr />
          <p className="px-10 py-5">secs</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

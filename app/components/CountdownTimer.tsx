"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate launch date (10 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 10);
    launchDate.setHours(0, 0, 0, 0); // Set to midnight

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] text-white rounded-2xl shadow-xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="text-3xl sm:text-4xl font-bold relative z-10 tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <div className="inline-block bg-gradient-to-r from-[#ff9d5c] to-[#ff8040] text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 LAUNCHING SOON
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#3d3d3d] mb-2">
          The Wait is Almost Over
        </h3>
        <p className="text-gray-600">MindAnchor launches in:</p>
      </div>

      <div className="flex justify-center gap-3 sm:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}

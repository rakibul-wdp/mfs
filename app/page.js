"use client";

import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [startCountdown, setStartCountdown] = useState(false);

  const handleStartClick = () => {
    setStartCountdown(true);
  };

  return (
    <div>
      {startCountdown ? (
        <Card
          setStartCountdown={setStartCountdown}
          startCountdown={startCountdown}
        />
      ) : (
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 text-lg font-bold mt-14 px-5 py-2 rounded-lg"
            onClick={handleStartClick}
          >
            Start Countdown &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [startCountdown, setStartCountdown] = useState(false);

  const handleStartClick = () => {
    setStartCountdown(true);
  };

  return (
    <div className="App">
      <button onClick={handleStartClick}>Start Countdown</button>
      <Card
        setStartCountdown={setStartCountdown}
        startCountdown={startCountdown}
      />
    </div>
  );
}

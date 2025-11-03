"use client";

import { useState, useEffect, useRef } from "react";

interface PomodoroTimerProps {
  duration: number;
}

export default function PomodoroTimer({ duration }: PomodoroTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setTimeLeft(duration * 60);
    setIsRunning(false);
    setIsCompleted(false);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;

          // Update browser tab title
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          document.title = `${minutes}:${seconds.toString().padStart(2, "0")} - MindAnchor`;

          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsCompleted(true);

      // Reset tab title
      document.title = "MindAnchor";

      // Play completion sound
      if (audioRef.current) {
        audioRef.current.play();
      }

      // Show desktop notification
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Pomodoro Complete!", {
          body: "Great job! Time for a break.",
          icon: "/icon.png",
        });
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    // Reset tab title when component unmounts
    return () => {
      document.title = "MindAnchor";
    };
  }, []);

  const requestNotificationPermission = async () => {
    if ("Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }
  };

  const startTimer = () => {
    requestNotificationPermission();
    setIsRunning(true);
    setIsCompleted(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration * 60);
    setIsCompleted(false);
    document.title = "MindAnchor";
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;

  return (
    <div className="text-center">
      {/* Audio element for beep sound */}
      <audio
        ref={audioRef}
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGmm98t2RQQoUXrTq7KhUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYIGmm98N+SQQoUXrTq66hUFApGn+DyvmwhBSuBzvLZiTYI"
      />

      <div className="relative">
        {/* Progress Circle */}
        <svg className="w-64 h-64 mx-auto transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#f3f4f6"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#ff9d5c"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 120}`}
            strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>

        {/* Time Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div
              className={`text-6xl font-bold ${
                isCompleted ? "text-green-500" : "text-[#3d3d3d]"
              }`}
            >
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>
            {isCompleted && (
              <div className="text-green-500 font-medium mt-2">Completed!</div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex justify-center space-x-4">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="bg-[#ff9d5c] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#ff8040] transition-colors shadow-lg hover:shadow-xl"
          >
            {timeLeft === duration * 60 ? "Start" : "Resume"}
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="bg-gray-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Pause
          </button>
        )}

        <button
          onClick={resetTimer}
          className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {isCompleted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-green-700 font-medium">
            🎉 Great work! Take a well-deserved break.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

interface MiniTimerProps {
  timeLeft: number;
  isRunning: boolean;
  currentTask?: string;
}

export default function MiniTimer({ timeLeft, isRunning, currentTask }: MiniTimerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Collapsed View */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] text-white rounded-2xl shadow-2xl p-4 hover:shadow-3xl transition-all hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>
            {isRunning && (
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            )}
          </div>
        </button>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden">
          <div className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">Pomodoro Timer</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="text-4xl font-bold mb-2">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>

            {currentTask && (
              <div className="text-sm opacity-90 truncate">
                Current task: {currentTask}
              </div>
            )}
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-2">
              {isRunning ? (
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  Timer Running
                </div>
              ) : (
                <div className="flex items-center text-gray-500 text-sm font-medium">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Timer Paused
                </div>
              )}

              <button
                onClick={() => setIsExpanded(false)}
                className="ml-auto text-[#ff9d5c] hover:text-[#ff8040] text-sm font-medium"
              >
                Minimize
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#3d3d3d] mb-6 leading-tight">
              Stay Focused,
              <br />
              <span className="text-[#ff9d5c]">Accomplish More</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MindAnchor helps you master your time with the proven Pomodoro technique
              and intelligent task management. Start your journey to peak productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="bg-[#ff9d5c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff8040] transition-all hover:shadow-xl hover:shadow-[#ff9d5c]/30 text-center transform hover:scale-105 animate-pulse-slow"
              >
                Download Now
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Available for macOS and Windows • Free to download
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

              {/* Desktop Environment Preview */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                {/* Simulated Desktop */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-4">

                  {/* Desktop Icons */}
                  <div className="absolute top-4 left-4 space-y-3">
                    <div className="flex flex-col items-center space-y-1 opacity-70">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg shadow-md"></div>
                      <span className="text-xs text-gray-700 font-medium">Chrome</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 opacity-70">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md"></div>
                      <span className="text-xs text-gray-700 font-medium">VS Code</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 opacity-70">
                      <div className="w-10 h-10 bg-green-500 rounded-lg shadow-md"></div>
                      <span className="text-xs text-gray-700 font-medium">Slack</span>
                    </div>
                  </div>

                  {/* Code Editor Window */}
                  <div className="absolute top-8 left-24 right-4 h-40 bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                    {/* Editor Title Bar */}
                    <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between border-b border-gray-700">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-400">app.tsx</span>
                      <div className="w-8"></div>
                    </div>

                    {/* Code Content */}
                    <div className="p-3 font-mono text-xs space-y-0.5">
                      <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                      <div className="text-purple-400">import <span className="text-blue-400">{'{ useState }'}</span>;</div>
                      <div className="h-1"></div>
                      <div className="text-blue-400">function <span className="text-yellow-400">App</span>() {'{'}</div>
                      <div className="pl-3 text-purple-400">const <span className="text-white">[count]</span> = <span className="text-blue-400">useState</span>();</div>
                      <div className="pl-3 text-purple-400">return <span className="text-gray-500">&lt;div&gt;...&lt;/div&gt;</span></div>
                      <div className="text-blue-400">{'}'}</div>
                    </div>
                  </div>

                  {/* MindAnchor Overlay - Hero Version */}
                  <div className="absolute bottom-4 right-4 w-64 bg-white rounded-2xl shadow-2xl border-2 border-[#ff9d5c] overflow-hidden">
                    <div className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] p-3 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xs">Pomodoro Timer</h3>
                        <div className="flex items-center space-x-1">
                          <button className="text-white/80 hover:text-white transition-colors" title="Minimize">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <button className="text-white/80 hover:text-white transition-colors" title="Close">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-1">25:00</div>
                      <div className="flex items-center text-white/90 text-xs">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse mr-1.5"></div>
                        <span>Focus Session</span>
                      </div>
                    </div>

                    {/* Task List */}
                    <div className="p-3 bg-white">
                      <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Today's Tasks</h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-2 p-1.5 bg-green-50 rounded border border-green-200">
                          <div className="w-3 h-3 rounded-full bg-[#ff9d5c] flex items-center justify-center flex-shrink-0">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-xs text-gray-500 line-through flex-1">Design homepage</span>
                        </div>

                        <div className="flex items-center space-x-2 p-1.5 bg-orange-50 rounded border border-orange-300">
                          <div className="w-3 h-3 rounded-full border-2 border-[#ff9d5c] flex-shrink-0"></div>
                          <span className="text-xs text-gray-700 font-medium flex-1">Review code</span>
                        </div>

                        <div className="flex items-center space-x-2 p-1.5">
                          <div className="w-3 h-3 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600 flex-1">Update docs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* "Always on Top" Badge */}
                  <div className="absolute top-4 right-4 bg-[#ff9d5c] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    ✨ Always Visible
                  </div>

                  {/* Desktop Taskbar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm px-4 py-1.5 flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-md shadow-md"></div>
                      <div className="w-6 h-6 bg-gray-700 rounded-md shadow-md"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-md shadow-md"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-md shadow-md ring-2 ring-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d3d3d] mb-4">See MindAnchor in Action</h2>
            <p className="text-gray-600">Beautiful, intuitive interface designed for maximum productivity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Screenshot 1 - Dashboard */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[4/3] p-6 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-32 bg-gradient-to-br from-[#ff9d5c]/20 to-[#ff8040]/20 rounded-lg flex items-center justify-center">
                      <div className="text-4xl font-bold text-[#ff9d5c]">25:00</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded"></div>
                      <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-200">
                <h3 className="font-semibold text-[#3d3d3d] mb-1">Dashboard View</h3>
                <p className="text-sm text-gray-600">Track your focus sessions and tasks</p>
              </div>
            </div>

            {/* Screenshot 2 - Timer */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[4/3] p-6 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="relative w-32 h-32 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                        <circle cx="64" cy="64" r="56" stroke="#ff9d5c" strokeWidth="8" fill="none" strokeDasharray="351.86" strokeDashoffset="87.96" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#3d3d3d]">18:45</span>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-16 h-8 bg-[#ff9d5c] rounded-lg"></div>
                      <div className="w-16 h-8 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-200">
                <h3 className="font-semibold text-[#3d3d3d] mb-1">Focus Timer</h3>
                <p className="text-sm text-gray-600">Customizable Pomodoro intervals</p>
              </div>
            </div>

            {/* Screenshot 3 - Task List */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[4/3] p-6 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <div className="w-4 h-4 rounded-full bg-[#ff9d5c]"></div>
                        <div className="h-2 bg-gray-300 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1 w-4/5"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <div className="w-4 h-4 rounded-full bg-[#ff9d5c]"></div>
                        <div className="h-2 bg-gray-300 rounded flex-1 w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-200">
                <h3 className="font-semibold text-[#3d3d3d] mb-1">Task Management</h3>
                <p className="text-sm text-gray-600">Organize and track your daily tasks</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ready to boost your productivity?</p>
            <Link
              href="#pricing"
              className="inline-block bg-[#ff9d5c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff8040] transition-all hover:shadow-xl hover:shadow-[#ff9d5c]/30 transform hover:scale-105"
            >
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

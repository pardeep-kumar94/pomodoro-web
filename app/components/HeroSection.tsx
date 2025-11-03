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
                className="bg-[#ff9d5c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff8040] transition-all hover:shadow-xl hover:shadow-[#ff9d5c]/30 text-center"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">FOCUS SESSION</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>
                  </div>

                  <div className="text-center">
                    <div className="text-7xl font-bold text-[#3d3d3d] mb-2">25:00</div>
                    <p className="text-gray-600 font-medium">Working on: Design Homepage</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full border-2 border-[#ff9d5c]"></div>
                      <span className="text-gray-700">Review client feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-[#ff9d5c] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-400 line-through">Morning standup meeting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                      <span className="text-gray-700">Update project documentation</span>
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
              className="inline-block bg-[#ff9d5c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff8040] transition-all hover:shadow-xl hover:shadow-[#ff9d5c]/30"
            >
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

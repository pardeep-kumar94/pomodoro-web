export default function HowItWorksSection() {
  const features = [
    {
      icon: "⏱️",
      title: "Customizable Pomodoro Timer",
      description:
        "Choose your ideal focus duration: 15, 25, 30, or 45 minutes. The timer adapts to your workflow and stays always visible on your desktop.",
    },
    {
      icon: "✓",
      title: "Smart Task Management",
      description:
        "Create daily task lists and track your progress. Check off completed items with satisfying strikethrough effects in real-time.",
    },
    {
      icon: "👁️",
      title: "Always-on-Top Overlay",
      description:
        "Keep your timer and tasks visible with a floating window that stays on top of all applications. Never lose sight of your focus session.",
    },
    {
      icon: "🔔",
      title: "Audio & Visual Alerts",
      description:
        "Get instant audio beeps and visual notifications when your Pomodoro session ends. Stay in the flow without constantly checking the timer.",
    },
    {
      icon: "📊",
      title: "Historical Tracking",
      description:
        "Review your past task lists and completed sessions organized by date. Gain insights into your productivity patterns.",
    },
    {
      icon: "💻",
      title: "System Tray Integration",
      description:
        "Quick access from your system tray. Start, pause, or skip sessions without opening the main window. MindAnchor stays out of your way.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3d3d3d] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MindAnchor combines the proven Pomodoro technique with intelligent task management
            to help you stay focused and accomplish more every day.
          </p>
        </div>

        {/* USP Screenshot - Desktop Overlay Feature */}
        <div className="mb-16 relative">
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
            {/* Simulated Desktop Environment */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-8">

              {/* Desktop Icons */}
              <div className="absolute top-6 left-6 space-y-4">
                <div className="flex flex-col items-center space-y-1 opacity-70">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg shadow-md"></div>
                  <span className="text-xs text-gray-700 font-medium">Chrome</span>
                </div>
                <div className="flex flex-col items-center space-y-1 opacity-70">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md"></div>
                  <span className="text-xs text-gray-700 font-medium">VS Code</span>
                </div>
                <div className="flex flex-col items-center space-y-1 opacity-70">
                  <div className="w-12 h-12 bg-green-500 rounded-lg shadow-md"></div>
                  <span className="text-xs text-gray-700 font-medium">Slack</span>
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="absolute top-12 left-32 w-2/3 h-3/4 bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                {/* Editor Title Bar */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">main.tsx - MindAnchor</span>
                  <div className="w-12"></div>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs space-y-1">
                  <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                  <div className="text-purple-400">import <span className="text-blue-400">{'{ useState }'}</span> from <span className="text-green-400">'react'</span>;</div>
                  <div className="h-2"></div>
                  <div className="text-blue-400">function <span className="text-yellow-400">App</span>() {'{'}</div>
                  <div className="pl-4 text-purple-400">const <span className="text-white">[count, setCount]</span> = <span className="text-blue-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                  <div className="pl-4 text-purple-400">return <span className="text-green-400">(</span></div>
                  <div className="pl-8 text-gray-500">&lt;div&gt;</div>
                  <div className="pl-12 text-gray-500">&lt;h1&gt;Counter: {'{count}'}&lt;/h1&gt;</div>
                  <div className="pl-8 text-gray-500">&lt;/div&gt;</div>
                  <div className="pl-4 text-green-400">)</div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>

              {/* MindAnchor Desktop Overlay - The USP! */}
              <div className="absolute bottom-8 right-8 w-80 bg-white rounded-2xl shadow-2xl border-2 border-[#ff9d5c] overflow-hidden animate-pulse">
                <div className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm">Pomodoro Timer</h3>
                    <div className="flex items-center space-x-2">
                      <button className="text-white/80 hover:text-white transition-colors" title="Minimize">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <button className="text-white/80 hover:text-white transition-colors" title="Close">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">18:45</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/90 text-xs">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span>Focus Session Active</span>
                    </div>
                  </div>
                </div>

                {/* Task List */}
                <div className="p-4 bg-white border-t-2 border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Today's Tasks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-4 h-4 rounded-full bg-[#ff9d5c] flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-500 line-through flex-1">Morning standup</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg border border-orange-300">
                      <div className="w-4 h-4 rounded-full border-2 border-[#ff9d5c] flex-shrink-0"></div>
                      <span className="text-xs text-gray-700 font-medium flex-1">Build React component</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 flex-1">Code review</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 flex-1">Update docs</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">3 of 4 remaining</span>
                  <button className="text-[#ff9d5c] text-xs font-medium hover:text-[#ff8040]">
                    Minimize
                  </button>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-6 right-6 bg-[#ff9d5c] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-2 animate-bounce">
                <span className="animate-pulse">✨</span>
                <span>Always on Top</span>
              </div>

              {/* Desktop Taskbar/Dock */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm px-6 py-2 flex items-center space-x-4">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-md"></div>
                  <div className="w-8 h-8 bg-gray-700 rounded-lg shadow-md"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-lg shadow-md"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-lg shadow-md ring-2 ring-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-[#3d3d3d] mb-3">
              Always Visible. Never Distracting.
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MindAnchor's desktop overlay stays on top of all your applications - whether you're coding,
              designing, writing, or browsing. Keep your focus timer visible without interrupting your workflow.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-100 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#3d3d3d] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">The Pomodoro Technique</h3>
            <p className="text-lg opacity-90 mb-8">
              Work in focused sprints, take regular breaks, and watch your productivity soar.
              MindAnchor makes it effortless to adopt this proven time management method.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1</div>
                <p className="text-sm opacity-90">Pick a task</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2</div>
                <p className="text-sm opacity-90">Start timer</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <p className="text-sm opacity-90">Work focused</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <p className="text-sm opacity-90">Take a break</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

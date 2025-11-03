"use client";

import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import PomodoroTimer from "../components/PomodoroTimer";
import TaskList from "../components/TaskList";

export default function DashboardPage() {
  const [timerDuration, setTimerDuration] = useState(25);
  const [tasks, setTasks] = useState<Array<{ id: string; text: string; completed: boolean }>>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3d3d3d] mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Ready to crush your goals today?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pomodoro Timer Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#3d3d3d] mb-6">Pomodoro Timer</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Duration
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[15, 25, 30, 45].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setTimerDuration(duration)}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      timerDuration === duration
                        ? "bg-[#ff9d5c] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {duration}m
                  </button>
                ))}
              </div>
            </div>

            <PomodoroTimer duration={timerDuration} />
          </div>

          {/* Task List Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#3d3d3d] mb-6">Today's Tasks</h2>

            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTask()}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9d5c] focus:border-transparent"
                />
                <button
                  onClick={addTask}
                  className="bg-[#ff9d5c] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff8040] transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-sm opacity-90">Sessions Completed Today</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">8</div>
            <div className="text-sm opacity-90">Tasks Completed Today</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">6h</div>
            <div className="text-sm opacity-90">Focused Time Today</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

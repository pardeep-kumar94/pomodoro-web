"use client";

import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

interface TaskList {
  id: string;
  date: string;
  duration: number;
  tasks: Array<{ text: string; completed: boolean }>;
  sessionsCompleted: number;
}

export default function HistoryPage() {
  // Mock data - in production this would come from a database
  const [taskLists] = useState<TaskList[]>([
    {
      id: "1",
      date: "2025-11-03",
      duration: 25,
      sessionsCompleted: 6,
      tasks: [
        { text: "Review project proposal", completed: true },
        { text: "Update documentation", completed: true },
        { text: "Team meeting prep", completed: true },
        { text: "Code review", completed: false },
      ],
    },
    {
      id: "2",
      date: "2025-11-02",
      duration: 30,
      sessionsCompleted: 4,
      tasks: [
        { text: "Design mockups", completed: true },
        { text: "Client call", completed: true },
        { text: "Fix bug in dashboard", completed: true },
      ],
    },
    {
      id: "3",
      date: "2025-11-01",
      duration: 25,
      sessionsCompleted: 5,
      tasks: [
        { text: "Write blog post", completed: true },
        { text: "Social media updates", completed: true },
        { text: "Email responses", completed: true },
        { text: "Research competitors", completed: false },
      ],
    },
  ]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  const getCompletionRate = (tasks: Array<{ completed: boolean }>) => {
    const completed = tasks.filter((t) => t.completed).length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3d3d3d] mb-2">History</h1>
          <p className="text-gray-600">Review your past task lists and progress</p>
        </div>

        <div className="space-y-6">
          {taskLists.map((taskList) => {
            const completionRate = getCompletionRate(taskList.tasks);
            const completedTasks = taskList.tasks.filter((t) => t.completed).length;

            return (
              <div
                key={taskList.id}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#3d3d3d] mb-1">
                      {formatDate(taskList.date)}
                    </h2>
                    <p className="text-gray-600">
                      {taskList.sessionsCompleted} sessions • {taskList.duration} min each
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ff9d5c]">{completionRate}%</div>
                      <div className="text-sm text-gray-500">Completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500">
                        {completedTasks}/{taskList.tasks.length}
                      </div>
                      <div className="text-sm text-gray-500">Tasks Done</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {taskList.tasks.map((task, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 rounded-xl ${
                        task.completed ? "bg-gray-50" : "bg-yellow-50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          task.completed
                            ? "bg-[#ff9d5c]"
                            : "bg-gray-300"
                        }`}
                      >
                        {task.completed && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`flex-1 ${
                          task.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-700"
                        }`}
                      >
                        {task.text}
                      </span>
                      {task.completed && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {taskLists.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 mx-auto mb-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No history yet</h3>
            <p className="text-gray-500">
              Start completing tasks to build your productivity history!
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

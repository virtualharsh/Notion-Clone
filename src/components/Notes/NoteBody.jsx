import React, { useState } from "react";
import { Star } from "lucide-react";

// Inline styles to hide scrollbars while still allowing scrolling
const styles = {
  scrollbarHide: {
    WebkitOverflowScrolling: "touch",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
  // Additional CSS for Webkit-based browsers to hide scrollbars
  hiddenScrollbar: {
    overflowX: "auto",
  },
};

const NoteBody = () => {
  // Initial tasks with some already starred
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Daily Task 1",
      description: "Complete project milestones and review tasks.",
      date: "29 Jan 2024",
      isStarred: true,
    },
    {
      id: 2,
      title: "Daily Task 2",
      description: "Review team updates and prepare reports.",
      date: "29 Jan 2024",
      isStarred: true,
    },
    {
      id: 3,
      title: "Daily Task 3",
      description: "Follow up on pending emails.",
      date: "29 Jan 2024",
      isStarred: false,
    },
    {
      id: 4,
      title: "Daily Task 4",
      description: "Plan agenda for the team meeting.",
      date: "29 Jan 2024",
      isStarred: false,
    },
  ]);

  // Add a new task (default as unstarred)
  const addCard = () => {
    const newCard = {
      id: Date.now(),
      title: "New Task",
      description: "This is a new task.",
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      isStarred: false,
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // Remove a task by id
  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  // Toggle the star status for a task
  const toggleStar = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isStarred: !card.isStarred } : card
      )
    );
  };

  // Separate tasks into starred (cards) and unstarred (table)
  const starredTasks = cards.filter((card) => card.isStarred);
  const unstarredTasks = cards.filter((card) => !card.isStarred);

  // Component for a Starred Task Card
  const StarredCard = ({ card }) => (
    <div className="flex-shrink-0 w-56 px-2">
      <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex flex-col p-6 justify-between border border-gray-700 transition-all duration-300 hover:border-blue-500 relative">
        <button
          onClick={() => toggleStar(card.id)}
          className="absolute top-3 right-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
          aria-label={card.isStarred ? "Unstar task" : "Star task"}
        >
          <Star
            size={18}
            className={card.isStarred ? "fill-yellow-400 text-yellow-400" : ""}
          />
        </button>
        <div className="flex flex-col items-center gap-y-2 text-center">
          <i className="ri-file-text-line text-blue-400 text-3xl mb-2"></i>
          <p className="text-lg font-semibold text-gray-100">{card.title}</p>
          <p className="text-sm text-gray-300 line-clamp-2">{card.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">{card.date}</p>
          <button
            onClick={() => removeCard(card.id)}
            className="text-gray-100 hover:text-red-400 transition-colors cursor-pointer"
            aria-label="Delete task"
          >
            <i className="ri-delete-bin-line text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-900 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">
          Good morning, Jay
        </h1>

        {/* Starred Tasks Section */}
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Starred Tasks
        </h2>
        <div
          className="overflow-x-auto pb-4"
          style={{ ...styles.scrollbarHide, ...styles.hiddenScrollbar }}
        >
          <div className="flex space-x-4">
            {starredTasks.map((card) => (
              <StarredCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Task List Section (Unstarred Tasks) */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-100">Task List</h2>
          <button
            onClick={addCard}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-gray-100 transition-colors"
          >
            Add Task
          </button>
        </div>
        <div
          className="overflow-x-auto"
          style={{ ...styles.scrollbarHide, ...styles.hiddenScrollbar }}
        >
          <table className="min-w-full divide-y divide-gray-700 bg-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-200">Title</th>
                <th className="px-4 py-2 text-left text-gray-200">Description</th>
                <th className="px-4 py-2 text-left text-gray-200">Date</th>
                <th className="px-4 py-2 text-center text-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {unstarredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-2 text-gray-100">{task.title}</td>
                  <td className="px-4 py-2 text-gray-300">{task.description}</td>
                  <td className="px-4 py-2 text-gray-400">{task.date}</td>
                  <td className="px-4 py-2 text-center space-x-4">
                    <button
                      onClick={() => toggleStar(task.id)}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                      aria-label="Star task"
                    >
                      <Star
                        size={18}
                        className={
                          task.isStarred
                            ? "fill-yellow-400 text-yellow-400"
                            : ""
                        }
                      />
                    </button>
                    <button
                      onClick={() => removeCard(task.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      aria-label="Delete task"
                    >
                      <i className="ri-delete-bin-line text-xl"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {unstarredTasks.length === 0 && (
                <tr>
                  <td className="px-4 py-2 text-center text-gray-300" colSpan="4">
                    No unstarred tasks available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoteBody;

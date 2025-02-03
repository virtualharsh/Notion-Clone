import React, { useState } from "react";

const NoteBody = () => {
    // State to manage the list of cards
    const [cards, setCards] = useState(
        Array.from({ length: 4 }, (_, index) => ({
            id: index,
            title: "Daily Task",
            description: "Complete project milestones and review tasks.",
            date: "29 Jan 2024"
        }))
    );

    /**
     * Function to add a new card.
     * Generates a unique ID using Date.now() to avoid conflicts.
     */
    const addCard = () => {
        const newCard = {
            id: Date.now(), // Unique ID based on timestamp
            title: "New Task",
            description: "This is a new task.",
            date: new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        };
        setCards((prevCards) => [...prevCards, newCard]); // Append new card to the list
    };

    /**
     * Function to remove a card by its ID.
     * Filters out the card with the matching ID.
     */
    const removeCard = (id) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    return (
        <div className="w-full h-max md:h-full flex flex-col items-center pt-20 gap-y-10 bg-gray-900 z-10">
            {/* Header */}
        <div
            className="w-full h-max md:h-full flex flex-col items-center pt-20 gap-y-10 bg-gray-900 z-10"
        >

            <h1 className="text-3xl font-bold text-gray-100">Good morning, Jay</h1>

            {/* Card Container */}
            <div className="md:w-10/12 p-10 md:px-24 flex gap-6 flex-wrap justify-center">
                {/* Render Cards */}
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="w-48 h-56 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex flex-col px-4 py-4 justify-between border border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500"
                    >
                        {/* Card Content */}
                        <div className="flex flex-col gap-y-3">
                            <i className="ri-file-text-line text-blue-400 text-3xl"></i>
                            <p className="text-lg font-semibold text-gray-100">{card.title}</p>
                            <p className="text-sm text-gray-300">{card.description}</p>
                        </div>

                        {/* Card Footer */}
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">{card.date}</p>
                            {/* Remove Button */}
                            <button
                                className="text-red-500 hover:text-red-600 transition-colors duration-200 focus:outline-none cursor-pointer"
                                onClick={() => removeCard(card.id)}
                                aria-label={`Remove card ${card.id}`}
                            >
                                <i className="ri-delete-bin-line text-xl"></i>
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add Card Button */}
                <div
                    className="w-48 h-56 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex flex-col px-4 py-4 justify-between border border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer"
                    onClick={addCard}
                    role="button"
                    aria-label="Add new card"
                >
                    <div className="flex flex-col gap-y-3 items-center justify-center h-full">
                        <i className="ri-add-line text-blue-400 text-3xl"></i>
                        <p className="text-lg font-semibold text-gray-100">Add Card</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteBody;
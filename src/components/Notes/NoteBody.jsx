import React from "react";

const NoteBody = () => {
    return (
        <div
            className="w-full h-max md:h-full flex flex-col items-center pt-20 gap-y-10 bg-gray-900 z-10"
        >

            <h1 className="text-3xl font-bold text-gray-100">Good morning, Jay</h1>
            
            <div className="md:w-10/12 p-10 md:px-24 flex gap-6 flex-wrap justify-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="w-48 h-56 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex flex-col px-4 py-4 justify-between border border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500"
                        style={{ zIndex: 1 }} // Lower z-index for cards
                    >
                        <div className="flex flex-col gap-y-3">
                            <i className="ri-file-text-line text-blue-400 text-3xl"></i>
                            <p className="text-lg font-semibold text-gray-100">Daily Task</p>
                            <p className="text-sm text-gray-300">
                                Complete project milestones and review tasks.
                            </p>
                        </div>
                        <p className="text-sm text-gray-400">29 Jan 2024</p>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default NoteBody;

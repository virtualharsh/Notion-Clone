import React from "react";

const NoteBody = () => {
    return (
        <div
            className="w-full h-max md:h-max flex flex-col items-center pt-20 pb-10 gap-y-10 bg-gray-900 z-10"
        >

            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 font-family-kirang tracking-wider">Good morning, User </h1>


            <div className="hidden md:w-8/12 md:px-44 md:flex min-w-11/12 flex-wrap gap-2 lg:gap-4 justify-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between p-4 w-40 h-44 border-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg">

                        <div className="flex flex-col gap-x-1 gap-y-4">
                            <i className="ri-file-text-line text-blue-400 md:text-3xl"></i>
                            <p className=" text-gray-100">Daily Task</p>
                        </div>

                        <p className="text-sm text-gray-400">29 Jan 2024</p>
                        <i className="absolute ri-star-fill text-yellow-100 top-3 right-3"></i>
                    </div>
                ))}
            </div>

            <div className="w-full md:9/12 lg:w-7/12 flex flex-col px-12 gap-y-2 ">
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="w-full h-max bg-gray-800 flex justify-between items-center rounded-lg p-4 text-lg hover:bg-gray-700">
                        <div className="flex items-center gap-x-4">
                            <i className="ri-file-text-line text-blue-400"></i>
                            <p className=" text-gray-100">Daily Task</p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <i className="ri-star-fill text-yellow-100 cursor-pointer"></i>
                            <i className="ri-menu-line cursor-pointer"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default NoteBody;

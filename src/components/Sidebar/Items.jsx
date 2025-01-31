import React from 'react'
import GeneralList from "./GeneralList";

const Items = () => {
    const [taskVisible, setTaskVisible] = React.useState(true);
    return (
        <div className="w-full h-max overflow-hidden flex flex-col gap-y-2">
            {/* Task */}
            <button className="flex p-0.5 items-center justify-between w-full font-bold">Tasks
                <i className={`ri-arrow-${taskVisible ? "up" : "down"}-s-line cursor-pointer`}
                    onClick={() => {
                        setTaskVisible((prev) => !prev);
                    }}></i>
            </button>

            <div className='h-7/12 overflow-auto'> 
                <div className=''>
                    <ul className={`${taskVisible ? "flex" : "hidden"} flex-col gap-y-0.5`}>
                        {[...Array(5)].map((_, index) => (
                            <div key={index}
                                className='p-1 pr-1.5 flex items-center justify-between hover:bg-navbar-gray-hover hover:rounded-lg'
                            >
                                <li className="text-gray-200 rounded-md text-md font-extralight"><i className="ri-booklet-line flex gap-2">Daily Task</i></li>
                                <button
                                    className="cursor-pointer"
                                ><i className="ri-menu-fill"></i></button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            <GeneralList />
        </div>
    )
}

export default Items;
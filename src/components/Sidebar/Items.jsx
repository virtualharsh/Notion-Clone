import React from 'react'

const Items = () => {
    const [taskVisible, setTaskVisible] = React.useState(true);
    return (
        <div className="w-full flex flex-col gap-y-2">

            <button className="flex p-0.5 items-center justify-between w-full font-bold">Tasks
                <i className={`ri-arrow-${taskVisible ? "up" : "down"}-s-line cursor-pointer`}
                    onClick={() => {

                        setTaskVisible((prev) => !prev);
                    }}></i>
            </button>

            <ul className={`${taskVisible ? "flex" : "hidden"} flex-col gap-y-1`}>
                <div
                    className='p-1 pr-1.5 flex items-center justify-between hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 rounded-md text-md font-extralight"><i className="ri-booklet-line flex gap-2">Daily Task</i></li>
                    <button
                        className="cursor-pointer"
                    ><i className="ri-menu-fill"></i></button>
                </div>
                <div
                    className='p-1 pr-1.5 flex items-center justify-between hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 rounded-md text-md font-extralight"><i className="ri-booklet-line flex gap-2">Frontend Notes</i></li>
                    <button
                        className="cursor-pointer"
                    ><i className="ri-menu-fill"></i></button>
                </div>
                <div
                    className='p-1 pr-1.5 flex items-center justify-between hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 rounded-md text-md font-extralight"><i className="ri-booklet-line flex gap-2">Database Notes</i></li>
                    <button
                        className="cursor-pointer"
                    ><i className="ri-menu-fill"></i></button>
                </div>
                <div
                    className='p-1 pr-1.5 flex items-center justify-between hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 rounded-md text-md font-extralight"><i className="ri-booklet-line flex gap-2">Backend Notes</i></li>
                    <button
                        className="cursor-pointer"
                    ><i className="ri-menu-fill"></i></button>
                </div>
            </ul>
        </div>
    )
}

export default Items;
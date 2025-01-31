import React from 'react'

const TopList = () => {
    return (
        <div className="w-full flex flex-col gap-y-1">
            <ul className="flex flex-col gap-y-2">
                <div className='p-1 flex items-center cursor-pointer hover:bg-blue-400 hover:rounded-lg'>
                    <li className="text-gray-200 text-md"><i className="ri-search-line flex gap-2">Search</i></li>
                </div>
                <div className='p-1 flex items-center cursor-pointer hover:bg-blue-400 hover:rounded-lg'>
                    <li className="text-gray-200 text-md"><i className="ri-notification-line flex gap-2">Notifications</i></li>
                </div>
            </ul>
        </div>
    )
}

export default TopList;
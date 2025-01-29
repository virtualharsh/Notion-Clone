import React from 'react'

const GeneralMenu = () => {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <button
                className="flex items-center justify-between w-full font-bold"
            >General</button>
            <ul className="flex flex-col gap-y-2">
                <div
                    className='p-1 flex items-center cursor-pointer hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 text-md"><i className="ri-settings-4-fill flex gap-2">Settings</i></li>
                </div>
                <div
                    className='p-1 flex items-center cursor-pointer hover:bg-navbar-gray-hover hover:rounded-lg'
                >
                    <li className="text-gray-200 text-md"><i className="ri-delete-bin-fill flex gap-2">Trash</i></li>
                </div>

            </ul>
        </div>
    )
}

export default GeneralMenu;
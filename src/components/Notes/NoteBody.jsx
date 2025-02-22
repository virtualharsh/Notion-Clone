import React from "react";

// Define the PopupMenu component here (copied from Items.js)
const PopupMenu = ({ x, y, onClose, actions }) => {
    const menuRef = React.useRef();

    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [onClose]);

    // Calculate adjusted position to prevent overflow
    const menuWidth = 160;
    const menuHeight = 112;
    const adjustedX = window.innerWidth - x < menuWidth ? x - menuWidth : x;
    const adjustedY = window.innerHeight - y < menuHeight ? y - menuHeight : y;

    return (
        <div
            ref={menuRef}
            className="fixed bg-gray-700 shadow-lg rounded-md p-1 z-50 border border-gray-600"
            style={{
                left: adjustedX,
                top: adjustedY,
                zIndex: 1000, // Ensure it's above other components
            }}
        >
            <ul className="flex flex-col gap-0.5 w-full">
                {actions.map((action, idx) => (
                    <li key={idx}>
                        <button
                            className="w-full text-left px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-100 focus:outline-none focus:bg-gray-600 cursor-pointer transition-colors duration-200"
                            onClick={() => {
                                action.handler();
                                onClose();
                            }}
                        >
                            <i className={`${action.icon} mr-2 text-gray-300`}></i>
                            {action.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const NoteBody = () => {
    const [activeMenu, setActiveMenu] = React.useState(null);

    const handleAction = (action, index) => {
        console.log(`${action} item ${index + 1}`);
        // Add your action handling logic here
    };

    const menuActions = (index) => [
        {
            label: "Rename",
            icon: "ri-file-edit-line",
            handler: () => handleAction("rename", index),
        },
        {
            label: "Favorite",
            icon: "ri-star-line",
            handler: () => handleAction("favorite", index),
        },
        {
            label: "Trash",
            icon: "ri-delete-bin-line",
            handler: () => handleAction("trash", index),
        },
        {
            label: "Copy Link",
            icon: "ri-link",
            handler: () => handleAction("copy", index),
        },
        {
            label: "Settings",
            icon: "ri-settings-fill",
            handler: () => handleAction("setting", index),
        },
    ];

    const handleMenuClick = (e, index) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        if (activeMenu && activeMenu.index === index) {
            setActiveMenu(null); // Close the menu if it's already open for the same item
        } else {
            setActiveMenu({
                type: "icon",
                index,
                x: rect.right,
                y: rect.bottom,
            });
        }
    };

    return (
        <div className="w-full h-max md:h-max flex flex-col items-center pt-20 pb-10 gap-y-10 bg-gray-900 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 font-family-kirang tracking-wider">
                Good morning, User
            </h1>

            <div className="hidden md:w-11/12 md:flex gap-8 flex-wrap justify-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between p-4 w-40 h-44 border-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg"
                    >
                        <div className="flex flex-col gap-x-1 gap-y-4">
                            <i className="ri-file-text-line text-blue-400 md:text-3xl"></i>
                            <p className="text-gray-100">Daily Task</p>
                        </div>

                        <p className="text-sm text-gray-400">29 Jan 2024</p>
                        <i className="absolute ri-star-fill text-yellow-100 top-3 right-3"></i>
                    </div>
                ))}
            </div>

            <div className="w-full flex md:w-7/12 px-10 gap-y-2 flex-wrap">
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full h-max bg-gray-800 flex justify-between items-center rounded-lg p-4 text-lg hover:bg-gray-700"
                    >
                        <div className="flex items-center gap-x-4">
                            <i className="ri-file-text-line text-blue-400"></i>
                            <p className="text-gray-100">Daily Task</p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <i className="ri-star-fill text-yellow-100 cursor-pointer"></i>
                            <i
                                className="ri-menu-line cursor-pointer"
                                onClick={(e) => handleMenuClick(e, index)}
                            ></i>
                        </div>
                    </div>
                ))}
            </div>

            {activeMenu && (
                <PopupMenu
                    x={activeMenu.x}
                    y={activeMenu.y}
                    onClose={() => setActiveMenu(null)}
                    actions={menuActions(activeMenu.index)}
                />
            )}
        </div>
    );
};

export default NoteBody;

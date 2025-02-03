import React from "react";
import GeneralList from "./GeneralList";

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

const Items = () => {
    const [taskVisible, setTaskVisible] = React.useState(true);
    const [activeMenu, setActiveMenu] = React.useState(null);

    const handleAction = (action, index) => {
        console.log(`${action} item ${index + 1}`);
        // Add your action handling logic here
    };

    const menuActions = (index) => [
        {
            label: "Rename",
            icon: "ri-arrow-up-down-line",
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
        <div className="w-full h-max overflow-hidden flex flex-col gap-y-2">
            {/* Task Header */}
            <button className="flex p-0.5 items-center justify-between w-full font-semibold text-gray-100">
                <p className="w-max">Tasks</p>

                <div className="w-full flex justify-end gap-x-2">
                    <i className="ri-add-line cursor-pointer"></i>
                    <i
                        className={`ri-arrow-${taskVisible ? "up" : "down"
                            }-s-line cursor-pointer text-gray-300 hover:text-gray-100`}
                        onClick={() => setTaskVisible((prev) => !prev)}
                    ></i>
                </div>
            </button>

            <div className="overflow-y-auto">
                <div className="w-full">
                    <ul
                        className={`${taskVisible ? "flex" : "hidden"} flex-col gap-y-0.5`}
                    >
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="p-1 pr-1.5 flex items-center justify-between hover:bg-blue-400 hover:rounded-lg transition-colors duration-200"
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    setActiveMenu({
                                        type: "context",
                                        index,
                                        x: e.pageX,
                                        y: e.pageY,
                                    });
                                }}
                            >
                                <li className="text-gray-200 rounded-md text-md font-extralight">
                                    <i className="ri-booklet-line flex gap-2 cursor-default">
                                        Daily Task {index + 1}
                                    </i>
                                </li>
                                <button
                                    className="cursor-pointer text-gray-300 hover:text-gray-100"
                                    onClick={(e) => handleMenuClick(e, index)}
                                >
                                    <i className="ri-menu-fill"></i>
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {activeMenu && (
                <PopupMenu
                    x={activeMenu.x}
                    y={activeMenu.y}
                    onClose={() => setActiveMenu(null)}
                    actions={menuActions(activeMenu.index)}
                />
            )}

            <GeneralList />
        </div>
    );
};

export default Items;
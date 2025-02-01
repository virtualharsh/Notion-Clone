import React from "react";
import Items from "./Items";
import TopList from "./TopList";
import NoteBody from "../Notes/NoteBody";

const SidebarLayout = () => {
    const [sidebar, setSidebar] = React.useState(true);
    const [sidebarButton, setSideBarButton] = React.useState(false);

    return (
        <>
            {/* Sidebar */}
            <div
                className={`${sidebar ? "w-full md:w-64 opacity-100" : "w-0 opacity-0 -translate-x-full"
                    } h-full overflow-y-auto overflow-x-hidden bg-gray-800 flex flex-col items-start justify-start p-4 gap-y-4 transition-all duration-500 ease-in-out fixed left-0 z-20`} // z-20 for sidebar
            >
                {/* Sidebar Header */}
                <div className="w-full flex items-center justify-between p-1">
                    <button className="flex gap-x-3 text-lg font-extrabold text-gray-100 hover:text-blue-400 transition-colors duration-300">
                        <i className="ri-list-check-3"></i>Jay's List
                    </button>
                    <div>
                        <button
                            onClick={() => {
                                setSidebar(!sidebar);
                                setSideBarButton(true);
                            }}
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        >
                            <i className="ri-menu-line text-xl cursor-pointer"></i>
                        </button>
                    </div>
                </div>

                {/* TopList and Items Components */}
                <TopList />
                <Items />
            </div>

            {/* Sidebar Toggle Button (Outside Sidebar) */}
            <div>
                <button
                    className={`fixed top-0 p-3 ${sidebarButton ? "block" : "hidden"
                        } cursor-pointer text-gray-300 hover:text-blue-400 transition-colors duration-300 left-4 z-30`} // z-30 for toggle button
                    onClick={() => {
                        setSidebar(!sidebar);
                        setSideBarButton(false);
                    }}
                >
                    <i className="ri-menu-line text-xl font-semibold"></i>
                </button>
            </div>

            {/* Main Content (NoteBody) */}
            <div
                className={`fixed h-full bg-gray-900 transition-all duration-500 ease-in-out ${sidebar ? "left-64 w-[calc(100%-16rem)]" : "left-0 w-full"
                    }`}
                style={{ zIndex: 0 }} // z-0 for main content
            >
                <NoteBody />
            </div>
        </>
    );
};

export default SidebarLayout;
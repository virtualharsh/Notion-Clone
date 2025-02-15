import React from "react";
import Items from "./Items";
import TopList from "./TopList";

const SidebarLayout = () => {
    const [sidebar, setSidebar] = React.useState(false);
    const [sidebarButton, setSideBarButton] = React.useState(true);

    return (
        <>
            {/* Sidebar */}
            <div
                className={`${sidebar ? "w-full md:w-64 opacity-100" : "w-0 opacity-0 -translate-x-full"} h-full overflow-y-auto overflow-x-hidden bg-gray-800 flex flex-col items-start justify-start p-5 md:p-3 gap-y-4 transition-all duration-500 ease-in-out fixed left-0 z-20`} // z-20 for sidebar
            >
                {/* Sidebar Header */}
                <div className="w-full flex items-center justify-between px-1 font-bold">
                    <h1 className="text-xl text-white font-family-quantico">User's list</h1>

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
                        } cursor-pointer text-gray-300 hover:text-blue-400 transition-colors duration-300 left-4 z-50`} // z-30 for toggle button
                    onClick={() => {
                        setSidebar(!sidebar);
                        setSideBarButton(false);
                    }}
                >
                    <i className="ri-menu-line text-xl font-semibold"></i>
                </button>
            </div>

        </>
    );
};

export default SidebarLayout;
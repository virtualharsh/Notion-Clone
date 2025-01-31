import React from "react";
import Items from "./Items";
import TopList from "./TopList";


const SidebarLayout = () => {

    const [sidebar, setSidebar] = React.useState(true);
    const [sidebarButton, setSideBarButton] = React.useState(false);

    return (
        <>
            <div className={`${sidebar ? "w-full md:w-64" : "hidden"} h-full overflow-auto bg-navbar-gray flex flex-col items-start justify-start p-2 gap-y-4`}>
                <div className="w-full flex items-center justify-between p-1">
                    <button className="flex gap-x-3 text-lg font-extrabold"><i className="ri-list-check-3"></i>Harsh's List</button>
                    <div>
                        <button
                            onClick={() => {
                                setSidebar(!sidebar)
                                setSideBarButton(true);
                            }}
                        ><i className="ri-menu-line text-xl cursor-pointer"></i></button>
                    </div>
                </div>
                <TopList />
                <Items />

            </div>

            <div>
                <button
                    className={`absolute top-0 p-3 ${sidebarButton ? "block" : "hidden"} cursor-pointer`}
                    onClick={() => {
                        setSidebar(!sidebar)
                        setSideBarButton(false);
                    }}
                ><i className="ri-menu-line text-xl font-semibold"></i></button>
            </div>


            <div className="hidden md:flex gap-2 top-2 items-center absolute p-2 h-8 md:w-2/12 right-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        className="w-full border-[1px] h-8 border-gray-300 rounded-md pl-8 pr-2 py-1"
                        placeholder="Search"
                    />
                    <i className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 ri-search-line text-lg"></i>
                </div>
            </div>

        </>

    )
};

export default SidebarLayout;

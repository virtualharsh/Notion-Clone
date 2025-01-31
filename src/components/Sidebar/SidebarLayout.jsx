import React from "react";
import Items from "./Items";
import GeneralMenu from "./GeneralMenu";



const SidebarLayout = () => {

    const [sidebar, setSidebar] = React.useState(true);
    const [sidebarButton, setSideBarButton] = React.useState(false);

    return (
        <>
            <div
                className={`${sidebar ? "w-64 opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-[-100%]" } h-full overflow-auto bg-navbar-gray flex flex-col items-start justify-start p-4 gap-y-4 transition-all duration-500 ease-in-out`}>

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

                <Items />

                <GeneralMenu />
            </div>

            <div>
                <button
                    className={`absolute z-0 top-0 p-3 ${sidebarButton ? "block" : "hidden"} cursor-pointer`}
                    onClick={() => {
                        setSidebar(!sidebar)
                        setSideBarButton(false);
                    }}
                ><i className="ri-menu-line text-xl"></i></button>
            </div>
        </>

    )
};

export default SidebarLayout;

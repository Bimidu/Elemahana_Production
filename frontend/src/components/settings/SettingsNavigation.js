import React, { Fragment, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: "GENERAL", path: "/settings" },
    { name: "CROPS", path: "/settings/crops" },
    { name: "INVENTORY", path: "/settings/inventory" },
    { name: "PESTICIDES", path: "/settings/pesticides" },
];

export default function SettingsNavigation() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    return (
        <div className="bg-gray-100 bg-opacity-50 backdrop-blur sticky top-12 border-b w-screen z-10">
            <header className="">
                <nav aria-label="Top" className="">
                    <div className="border-gray-200">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-row items-center w-full gap-2 text-gray-800 px-4 text-xs font-medium h-10 overflow-x-auto">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex focus:outline-none focus:ring focus:ring-lime-500 transition-colors ${
                                            isActive(item.path) ? "text-gray-100 px-2 py-1 bg-gradient-to-tr from-emerald-500 via-green-500 to-lime-400 rounded-full hover:bg-lime-600" : " hover:bg-lime-200 rounded-full  hover:py-1 transition-all duration-200"
                                        }`}
                                        onClick={() => handleTabClick(item.path)}
                                    >
                                        <Link to={item.path} className="px-2 flex items-center">
                                            {item.icon && <item.icon className="mr-4" />}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
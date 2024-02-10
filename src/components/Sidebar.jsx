import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdOutlineFeedback } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const youSection = [
    { tag: "Your Channel", icon: <CgProfile /> },
    { tag: "History", icon: <VscHistory /> },
    { tag: "Your Video", icon: <RiVideoLine /> },
    { tag: "Watch later", icon: <BsClockHistory /> },
    { tag: "Liked Video", icon: <AiOutlineLike /> },
];

const subscriptions = ["eZlive", "Akshay Saini", "Striver", "HarKirat Singh"];

const otherSection = [
    {
        tag: "Setting",
        icon: <IoSettingsOutline />,
    },
    {
        tag: "Report History",
        icon: <IoFlagOutline />,
    },
    {
        tag: "help",
        icon: <IoIosHelpCircleOutline />,
    },
    {
        tag: "Feed Back",
        icon: <MdOutlineFeedback />,
    },
];

const Sidebar = () => {
    const isSideNavBarVisible = useSelector(
        (state) => state.appSlice.isSideNavBarVisible
    );

    return (
        <div
            className={`relative w-2/12 h-screen overflow-hidden transition-all ${
                !isSideNavBarVisible && "w-1/12"
            }`}
        >
            <div
                className={`*:mb-5 *:mt-2 text-gray-500 h-screen border px-2 py-5 *:px-2 overflow-y-auto *:border-b ${
                    !isSideNavBarVisible && "*:border-none"
                }`}
            >
                <div>
                    <ul
                        className={`list-none *:flex *:items-center *:cursor-pointer *:rounded-lg *:text-lg *:p-1 *:gap-4 px-2 *:my-3 transition-all ${
                            !isSideNavBarVisible && "*:text-xl *:flex-col *:p-3"
                        }`}
                    >
                        <li className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all">
                            <IoMdHome className="text-gray-800" />
                            <p
                                className={
                                    !isSideNavBarVisible
                                        ? "text-xs font-semibold"
                                        : ""
                                }
                            >
                                Home
                            </p>
                        </li>
                        <li className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all">
                            <SiYoutubeshorts className="text-gray-800" />{" "}
                            <p
                                className={
                                    !isSideNavBarVisible
                                        ? "text-xs font-semibold"
                                        : ""
                                }
                            >
                                Shorts
                            </p>
                        </li>
                        <li className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all">
                            <MdSubscriptions className="text-gray-800" />
                            <p
                                className={
                                    !isSideNavBarVisible
                                        ? "text-xs font-semibold"
                                        : ""
                                }
                            >
                                Subscriptions
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={!isSideNavBarVisible ? "hidden" : ""}>
                    <h1 className="text-xl font-semibold text-gray-700 my-2">
                        You &gt;
                    </h1>
                    <ul className="list-none *:flex *:items-center *:cursor-pointer *:rounded-lg *:text-lg *:p-1 *:gap-4 px-3 *:my-3">
                        {youSection.map((section) => {
                            return (
                                <li
                                    key={section.tag}
                                    className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all"
                                >
                                    {section.icon}
                                    <p>{section.tag}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={!isSideNavBarVisible ? "hidden" : ""}>
                    <h1 className="text-xl font-semibold text-gray-700 my-2">
                        subscriptions
                    </h1>
                    <ul className="list-none *:flex *:items-center *:cursor-pointer *:rounded-lg *:text-lg *:p-1 *:gap-4 px-3 *:my-3">
                        {subscriptions.map((section) => {
                            return (
                                <li
                                    key={section}
                                    className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all"
                                >
                                    <CgProfile />
                                    <p>{section}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={!isSideNavBarVisible ? "hidden" : ""}>
                    <ul className="list-none *:flex *:items-center *:cursor-pointer *:rounded-lg *:text-lg *:p-1 *:gap-4 px-3 *:my-3">
                        {otherSection.map((section) => {
                            return (
                                <li
                                    key={section.tag}
                                    className="hover:bg-gray-200 hover:text-gray-800 text-lg transition-all"
                                >
                                    {section.icon}
                                    <p>{section.tag}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

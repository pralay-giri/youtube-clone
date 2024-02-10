import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { DEFAULT_PROFILE_CDN } from "../ustils/constant";
import { MdOutlineNotifications } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeSideNavBar, openSideNavBar } from "../store/slices/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const isSideNavBarVisible = useSelector(
        (state) => state.appSlice.isSideNavBarVisible
    );
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const handleHamBarClick = () => {
        isSideNavBarVisible
            ? dispatch(closeSideNavBar())
            : dispatch(openSideNavBar());
    };

    return (
        <div className="flex items-center w-screen shadow-lg px-1 py-2">
            <RxHamburgerMenu
                className="w-8 text-2xl font-bold cursor-pointer mx-4"
                onClick={handleHamBarClick}
            />
            <div className="flex gap-1 items-center *:cursor-pointer">
                <div className="w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="youtube"
                    >
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path
                                fill="#F44336"
                                d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                            ></path>
                            <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                        </g>
                    </svg>
                </div>
                <p className="text-2xl text-gray-700 font-bold">YouTube</p>
            </div>
            <div className="flex items-center w-5/12 mx-auto">
                <input
                    type="text"
                    placeholder="search"
                    className=" border border-gray-500 rounded-l-full w-10/12 pl-5 p-2 outline-1 focus-visible:outline-none focus-visible:border focus-visible:border-blue-900 text-gray-700 items-center"
                    value={searchInput}
                    onChange={handleSearch}
                />
                <div className="text-2xl font-bold border border-gray-500 px-3 py-2 bg-gray-200 text-gray-600 rounded-r-full *:cursor-pointer">
                    <IoSearch />
                </div>
            </div>
            <div className=" w-2/12 flex text-3xl text-gray-600 *:cursor-pointer items-center justify-evenly">
                <IoVideocamOutline className="hover:text-gray-800" />
                <MdOutlineNotifications className="hover:text-gray-800" />
                <div className="w-10">
                    <img src={DEFAULT_PROFILE_CDN} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;

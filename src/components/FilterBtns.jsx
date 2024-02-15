import React, { useState } from "react";
const buttons = [
    {
        id: "All",
        name: "All",
    },
    {
        id: "Mixes",
        name: "Mixes",
    },
    {
        id: "Music",
        name: "Music",
    },
    {
        id: "Live",
        name: "Live",
    },
    {
        id: "Computer",
        name: "Computer",
    },
    {
        id: "Game",
        name: "Game",
    },
    {
        id: "Vocal Music",
        name: "Vocal Music",
    },
    {
        id: "Gadgets",
        name: "Gadgets",
    },
    {
        id: "Algebra",
        name: "Algebra",
    },
    {
        id: "Playlist",
        name: "Playlist",
    },
    {
        id: "Math",
        name: "Math",
    },
    {
        id: "Programing",
        name: "Programing",
    },
    {
        id: "AI",
        name: "AI",
    },
    {
        id: "New to you",
        name: "New to you",
    },
    {
        id: "Watched",
        name: "Watched",
    },
];

const FilterBtns = () => {
    const [activeBtnIndex, setActiveBtnIndex] = useState(buttons[0].id);
    const handleBtnClick = (id) => {
        if (activeBtnIndex === id) {
            return;
        } else {
            setActiveBtnIndex((prev) => id);
            // handle network call for reqiured video cards
        }
    };

    return (
        <div className="relative overflow-x-hidden w-12/12 px-5 py-4 ">
            <div className="relative px-2 py-3 flex flex-row overflow-x-scroll no-scroll-bar">
                {buttons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => handleBtnClick(btn.id)}
                        className={`px-3 py-1 rounded-lg text-md font-semibold mr-3 transition-colors hover:bg-opacity-70 flex-shrink-0 ${
                            activeBtnIndex === btn.id
                                ? "text-white bg-[#1F2544]"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {btn.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBtns;

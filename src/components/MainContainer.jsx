import React from "react";
import FilterBtns from "./FilterBtns";
import VideoListContainer from "./VideoListContainer";

const MainContainer = () => {
    return (
        <div className="w-10/12">
            <FilterBtns />
            <VideoListContainer />
        </div>
    );
};

export default MainContainer;

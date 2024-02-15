import React from "react";
import FilterBtns from "./FilterBtns";
import VideoListContainer from "./VideoListContainer";
import { useSelector } from "react-redux";
const MainContainer = () => {
    const isSideNavBarVisible = useSelector(
        (state) => state.appSlice.isSideNavBarVisible
    );
    return (
        <div className={`${!isSideNavBarVisible ? "w-11/12" : "w-10/12"}`}>
            <FilterBtns />
            <VideoListContainer />
        </div>
    );
};

export default MainContainer;

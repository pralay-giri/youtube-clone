import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";

const VideoListContainer = () => {
    useFetchVideos();
    return <div className="mx-8 my-2">video container</div>;
};

export default VideoListContainer;

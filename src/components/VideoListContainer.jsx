import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoListContainer = () => {
    const videoInfo = useSelector((state) => state.appSlice.videos);
    useFetchVideos();
    return (
        <div className="mx-8 my-2 flex flex-wrap gap-5">
            {videoInfo?.items.map((video) => (
                <VideoCard key={video.id} videoInfo={video} />
            ))}
        </div>
    );
};

export default VideoListContainer;

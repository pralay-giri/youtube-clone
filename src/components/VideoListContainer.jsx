import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoListContainer = () => {
    const videoInfo = useSelector((state) => state.appSlice.videos);
    useFetchVideos();
    return (
        <div className="mx-8 my-2 flex flex-wrap gap-5">
            {videoInfo?.items.map((video) => (
                <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoCard videoInfo={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoListContainer;

import React from "react";
import { formatDuration } from "../ustils/formateDuration";
import { DEFAULT_PROFILE_URL } from "../ustils/constant";
import { viewConveter } from "../ustils/formatViewCount";

const VideoCard = ({ videoInfo }) => {
    // early returning statement
    if (!videoInfo) return;
    const duration = formatDuration(videoInfo?.contentDetails?.duration);
    const views = viewConveter(videoInfo?.statistics?.viewCount);
    return (
        <div className="w-60 rounded-lg hover:rounded-none group overflow-hidden transition-all mb-5">
            <div className="container relative rounded-lg  group-hover:rounded-none transition-all overflow-hidden">
                <img
                    loading="lazy"
                    className="w-full aspect-video object-cover object-center"
                    src={videoInfo?.snippet?.thumbnails?.standard?.url}
                    width={100}
                    alt={videoInfo?.snippet?.channelTitle}
                />
                <p className="absolute right-1 bottom-1 text-sm text-white bg-black rounded-lg px-1 py-[0.5px] text-center">
                    {duration}
                </p>
            </div>
            <div className="flex">
                <div className="w-9 h-9  aspect-square">
                    <img
                        src={DEFAULT_PROFILE_URL}
                        alt="channel logo"
                        className="w-full"
                    />
                </div>
                <div className="">
                    <h1
                        className="
                     w-full text-sm font-semibold text-gray-700 whitespace-normal overflow-hidden"
                    >
                        {videoInfo?.snippet?.title}
                    </h1>
                    <p className="text-gray-500 text-sm font-semibold">
                        {videoInfo?.snippet?.channelTitle}
                    </p>
                    <p className="text-gray-500 text-sm font-semibold">
                        {views} views
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;

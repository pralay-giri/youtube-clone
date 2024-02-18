import React from "react";
import { formatDuration } from "../ustils/formateDuration";
import { viewConveter } from "../ustils/formatViewCount";
import { DEFAULT_PROFILE_URL } from "../ustils/constant";

const HorizontalVideoCard = ({ videoInfo }) => {
    if (!videoInfo) return;
    const duration = formatDuration(videoInfo?.contentDetails?.duration);
    const views = viewConveter(videoInfo?.statistics?.viewCount);
    return (
        <div className="w-full rounded-lg hover:rounded-none group overflow-hidden transition-all mb-5 flex gap-3">
            <div className="container relative rounded-lg group-hover:rounded-none transition-all overflow-hidden w-7/12 aspect-video">
                <img
                    className="object-cover aspect-video"
                    loading="lazy"
                    src={videoInfo?.snippet?.thumbnails?.standard?.url}
                    alt={videoInfo?.snippet?.channelTitle}
                />
                <div className="absolute bottom-0 right-0 bg-black text-white rounded-bl-lg py-1 px-2 text-xs">
                    {duration}
                </div>
            </div>

            <div className="w-5/12 flex">
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

export default HorizontalVideoCard;

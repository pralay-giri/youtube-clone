import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useSearchVideoInfo from "../hooks/useSearchVideoInfo";
import { useSelector, useDispatch } from "react-redux";
import { closeSideNavBar } from "../store/slices/appSlice";
import VideoCard from "./VideoCard";
import { DEFAULT_PROFILE_CDN } from "../ustils/constant";
import { viewConveter } from "../ustils/formatViewCount";
import Description from "./Description";
import CommentArea from "./CommentArea";
import HorizontalVideoCard from "./HorizontalVideoCard";

const WatchPage = () => {
    const dispatch = useDispatch();
    dispatch(closeSideNavBar());
    const [isLiked, setIsLiked] = useState(false);
    const [isSubScribed, setIsSubScribed] = useState(false);
    const commentData = useSelector((state) => state.appSlice.comments);

    // subscribing the slices
    const clickedVideo = useSelector((state) => state.appSlice.clickedVideo);
    const relatedVideos = useSelector((state) => state.appSlice.relatedVideos);

    const [searchQueary] = useSearchParams();
    const videoId = searchQueary.get("v");

    const videoInfo = clickedVideo;

    useSearchVideoInfo(videoId);

    const handleLikeClick = () => {
        setIsLiked((prev) => !prev);
    };

    const handleSubscribeClick = () => {
        setIsSubScribed((prev) => !prev);
    };

    return (
        <div className="w-full p-5 flex gap-5">
            <div className="w-8/12 ">
                <div className="w-12/12 aspect-video">
                    <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${videoId}?si=gTrhy80-4n1pLU7h?autoplay=1`}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="mt-3 text-xl font-semibold text-gray-700">
                    {videoInfo?.items?.[0]?.snippet?.title}
                </p>
                <div className="flex justify-between items-center mb-5">
                    <div className="w-12">
                        <img
                            src={DEFAULT_PROFILE_CDN}
                            alt="profile"
                            width={100}
                        />
                    </div>
                    <p className="mr-auto text-xl font-semibold text-gray-600">
                        {videoInfo?.items?.[0]?.snippet?.channelTitle}
                    </p>
                    <div className="*:border *:rounded-full *:ml-2 *:px-2 *:py-1">
                        <button
                            className="px-2 py-1 border bg-black text-white"
                            onClick={handleSubscribeClick}
                        >
                            {isSubScribed ? "subscribed" : "subscribe"}
                        </button>
                        <button
                            className={`px-2 py-1 hover:bg-opacity-80 ${
                                isLiked && "bg-red-600 text-white"
                            }`}
                            onClick={handleLikeClick}
                        >
                            like{" "}
                            {viewConveter(
                                videoInfo?.items?.[0]?.statistics?.likeCount
                            )}
                        </button>
                        <button className="px-2 py-1 hover:bg-opacity-80">
                            share
                        </button>
                        <button className="px-2 py-1 hover:bg-opacity-80">
                            download
                        </button>
                    </div>
                </div>
                <Description
                    views={videoInfo?.items?.[0]?.statistics?.viewCount}
                    descriptionData={
                        videoInfo?.items?.[0]?.snippet?.description
                    }
                    date={videoInfo?.items?.[0]?.snippet?.publishedAt}
                />
                <CommentArea
                    totalCommentCount={
                        videoInfo?.items?.[0]?.statistics?.commentCount
                    }
                    commentData={commentData}
                />
            </div>
            <div className="w-4/12">
                {relatedVideos?.items?.map((video) => {
                    if (video.id === clickedVideo?.items?.[0]?.id) {
                        return;
                    }
                    return (
                        <Link to={`/watch?v=${video.id}`} key={video.id}>
                            <HorizontalVideoCard videoInfo={video} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default WatchPage;

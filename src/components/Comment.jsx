import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../ustils/formatDate";
import formatDateTotext from "../ustils/formatDateToText";
import { DEFAULT_PROFILE_CDN, DEFAULT_PROFILE_URL } from "../ustils/constant";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Comment = ({ commentData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setDisIsLiked] = useState(false);

    const name =
        commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName;
    const profileUrl =
        commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
    const likes = commentData?.snippet?.topLevelComment?.snippet?.likeCount;
    const authorChannelId =
        commentData?.snippet?.topLevelComment?.snippet?.authorChannelId?.value;
    let time = commentData?.snippet?.topLevelComment?.snippet?.publishedAt;
    const commentText =
        commentData?.snippet?.topLevelComment?.snippet?.textDisplay;
    time = formatDateTotext(formatDate(time));

    const handleDislike = () => {
        if (isLiked) {
            setIsLiked(false);
        }
        setDisIsLiked((prev) => !prev);
    };

    const handleLike = () => {
        if (isDisLiked) {
            setDisIsLiked(false);
        }
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="flex gap-2">
            <Link
                to={`/channel/?v=${authorChannelId}`}
                className="w-8 aspect-square"
            >
                <img
                    src={profileUrl ? profileUrl : DEFAULT_PROFILE_CDN}
                    alt="profile"
                    width={100}
                    className="object-cover object-center rounded-full"
                />
            </Link>
            <div className="">
                <div className="flex gap-1">
                    <p className="text-lg font-semibold text-gray-700">
                        {name}
                    </p>
                    <p>{time}</p>
                </div>
                <p>{commentText}</p>
                <div className="btns flex items-center gap-2 transition-all *:flex *:items-center *:text-xl *:font-semibold *:p-2 *:rounded-full">
                    <button
                        onClick={handleLike}
                        className={` ${
                            isLiked
                                ? "text-white bg-black"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        <AiOutlineLike />
                        <span className="text-sm">{likes > 0 && likes}</span>
                    </button>
                    <button
                        onClick={handleDislike}
                        className={` ${
                            isDisLiked
                                ? "text-white bg-black"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        <AiOutlineDislike />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;

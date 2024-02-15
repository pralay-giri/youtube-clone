import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdSort } from "react-icons/md";
import { DEFAULT_PROFILE_URL } from "../ustils/constant";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { GrEmoji } from "react-icons/gr";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import useFetchComments from "../hooks/useFetchComments";

const CommentArea = ({ totalCommentCount, commentData }) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    const dispatch = useDispatch();
    const [isToolTipVisible, setIsToolTipVisible] = useState(false);
    const [isSortBtnVisible, setIsSortBtnVisible] = useState(false);
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const [sortType, setSortType] = useState("&order=time");
    const [commentValue, setCommentValue] = useState("");

    useFetchComments(id, sortType);

    const handleSortBtnHover = () => {
        if (isSortBtnVisible) {
            setIsToolTipVisible(false);
        }
        setIsToolTipVisible((prev) => !prev);
    };

    const handleStortBtnClick = () => {
        setIsToolTipVisible((prev) => !prev);
        setIsSortBtnVisible((prev) => !prev);
    };

    const handleEmojiSelect = (e) => {
        setCommentValue((prev) => prev + e.native);
    };

    const handleInputField = (e) => {
        setCommentValue(e.target.value);
    };

    const handleSortTopComments = () => {
        setSortType((prev) => "&order=relevance");
    };
    const handleSortNewestComments = () => {
        setSortType((prev) => "&order=time");
    };

    return (
        <div className="mt-2">
            <div className="header flex gap-5">
                <h1 className="text-xl font-bold text-gray-700">
                    {totalCommentCount > 1
                        ? `${totalCommentCount} comments`
                        : `${totalCommentCount} comment`}
                </h1>
                <div
                    className="flex items-center gap-1 px-1 py-1 rounded-full text-xl font-bold text-gray-700 relative cursor-pointer"
                    onMouseEnter={handleSortBtnHover}
                    onMouseLeave={handleSortBtnHover}
                    onClick={handleStortBtnClick}
                >
                    <MdSort />
                    <span>sort by</span>
                    {isToolTipVisible && (
                        <p className="absolute top-10 bg-gray-400 px-1 py z-50 -2 rounded bg-opacity-95 text-sm text-white transition-opacity text-center">
                            sort comments
                        </p>
                    )}
                    {isSortBtnVisible && (
                        <div className="btns *:w-full *:py-2 *:px-1 *:text-sm text-gray-700 absolute top-10 bg-gray-200 py-2 rounded z-50">
                            <button
                                className="hover:bg-gray-300 text-center"
                                onClick={handleSortTopComments}
                            >
                                top comments
                            </button>
                            <button
                                className="hover:bg-gray-300 text-center"
                                onClick={handleSortNewestComments}
                            >
                                newest first
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="commentInputArea flex items-center">
                <div className="w-14 aspect-square">
                    <img src={DEFAULT_PROFILE_URL} alt="profile" />
                </div>
                <div className="w-full px-2 py-1 group">
                    <div className="my-2  w-full relative">
                        <input
                            type="text"
                            placeholder="add comments..."
                            value={commentValue}
                            onChange={handleInputField}
                            className="text-lg border-b-2 border-b-gray-500 w-full outline-none transition-colors focus-visible:border-b-2 focus-visible:border-black"
                        />
                    </div>
                    <div className="items-center px-2 hidden transition-all group-focus-within:flex group-focus-within:visible">
                        <GrEmoji
                            className="mr-auto text-2xl font-semibold cursor-pointer text-gray-800 hover:bg-gray-300 rounded-full"
                            onClick={() =>
                                setEmojiPickerVisible((prev) => !prev)
                            }
                        />
                        <div className="*:rounded-full *:px-3 *:py-2 *:mx-1">
                            <button className=" hover:bg-gray-200">
                                Cancel
                            </button>
                            <button
                                className={`transition-all hover:bg-opacity-85 ${
                                    commentValue
                                        ? "bg-blue-400 text-white"
                                        : "bg-gray-300 pointer-events-none opacity-50"
                                }`}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                    <div className="absolute">
                        {emojiPickerVisible && (
                            <Picker
                                data={data}
                                onEmojiSelect={handleEmojiSelect}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="comments">
                <div className="comment *:mb-2">
                    {commentData?.items?.map((comment) => {
                        if (comment?.snippet?.isPublic)
                            return (
                                <Comment
                                    key={comment?.id}
                                    commentData={comment}
                                />
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CommentArea;

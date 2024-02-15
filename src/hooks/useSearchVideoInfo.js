import { useEffect } from "react";
import {
    VIDEO_DETAILS_API,
    YOUTUBE_VIDEO_API,
    COMMENT_API,
} from "../ustils/constant";
import { useDispatch } from "react-redux";
import { setClickedVideo, setComments } from "../store/slices/appSlice";
import { setReletedVideos } from "../store/slices/appSlice";

const useSearchVideoInfo = (id) => {
    if (!id) return;
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const responce = await fetch(VIDEO_DETAILS_API + id);
            const data = await responce.json();
            if (data) {
                dispatch(setClickedVideo(data));

                // fetching videos info
                const relatedVideo = await fetch(YOUTUBE_VIDEO_API);
                const relatedVideoData = await relatedVideo.json();
                dispatch(setReletedVideos(relatedVideoData));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);
};

export default useSearchVideoInfo;

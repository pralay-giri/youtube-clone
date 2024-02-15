import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../ustils/constant";
import { useEffect } from "react";

const useFetchRelatedVideos = (catagory, dispatchFunction) => {
    console.log(catagory);
    const dispatch = useDispatch();
    if (!catagory) return;

    const fetchData = async () => {
        try {
            const responce = await fetch(
                YOUTUBE_VIDEO_API + `&videoCategoryId=${catagory}`
            );
            const data = await responce.json();
            if (data) {
                dispatch(dispatchFunction(data));
            } else {
                throw new Error("data not avalable");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(catagory);
        return () => {};
    }, [catagory]);
};

export default useFetchRelatedVideos;

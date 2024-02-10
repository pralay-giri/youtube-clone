import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../ustils/constant";
import { setVideo } from "../store/slices/appSlice";

const useFetchVideos = () => {
    const disptach = useDispatch();
    const fetchData = async () => {
        try {
            const responce = await fetch(YOUTUBE_VIDEO_API);
            const data = await responce.json();
            console.log(data);
            disptach(setVideo(data));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
};

export default useFetchVideos;

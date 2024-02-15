import { useEffect } from "react";
import { setComments } from "../store/slices/appSlice";
import { COMMENT_API } from "../ustils/constant";
import { useDispatch } from "react-redux";

const useFetchComments = (id, sortType) => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const commentResponse = await fetch(COMMENT_API + id + sortType);
            const commentData = await commentResponse.json();
            dispatch(setComments(commentData));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(sortType);
    }, [sortType]);
};

export default useFetchComments;

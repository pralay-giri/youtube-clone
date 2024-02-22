import { useEffect } from "react";
import { addSearchData } from "../store/slices/searchSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../ustils/constant";

export const useFetchSearchQuery = (query) => {
    const dispatch = useDispatch();
    const fetchData = async (query) => {
        try {
            console.log(YOUTUBE_SEARCH_API + query);
            const response = await fetch(YOUTUBE_SEARCH_API + query);
            const data = await response.json();
            dispatch(addSearchData(data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(query);
    }, [query]);
};

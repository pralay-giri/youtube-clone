import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetchSearchQuery } from "../hooks/useFetchSearchQuery";
import { useSelector } from "react-redux";
import HorizontalVideoCard from "./HorizontalVideoCard";
import { openSideNavBar } from "../store/slices/appSlice";
import { useDispatch } from "react-redux";

const ResultPage = () => {
    const dispatch = useDispatch();
    const searchData = useSelector((store) => store.searchSlice.searchData);
    const [searchParams] = useSearchParams();
    const searchQueary = searchParams.get("search_query");
    useFetchSearchQuery(searchQueary);

    useEffect(() => {
        dispatch(openSideNavBar());
    }, []);

    return (
        <div className="m-10 flex flex-col gap-2">
            {searchData?.items?.map((item) => {
                return (
                    <Link
                        to={`/watch?v=${item.id.videoId}`}
                        key={item.id.videoId}
                    >
                        <HorizontalVideoCard videoInfo={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ResultPage;

import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ResultPage = () => {
    const searchItems = useSelector((state) => state.searchSlice.items);
    console.log(searchItems);
    const [searchParams] = useSearchParams();
    const searchQueary = searchParams.get("search_query");
    console.log(searchQueary);
    return <div>{searchQueary}</div>;
};

export default ResultPage;

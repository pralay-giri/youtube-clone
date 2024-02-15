import React, { useState } from "react";
import { viewConveter } from "../ustils/formatViewCount";
import { formatDate } from "../ustils/formatDate";
import formatDateTotext from "../ustils/formatDateToText";

const Description = ({ views, descriptionData, date }) => {
    const [isClosed, setIsClosed] = useState(true);
    let formatedDate = formatDate(date);
    formatedDate = formatDateTotext(formatedDate);

    return (
        <div className="border bg-gray-200 rounded-lg px-2 py-1">
            <div
                className="flex gap-5  cursor-pointer"
                onClick={() => setIsClosed(false)}
            >
                <h1 className="text-lg font-semibold text-gray-700">
                    {viewConveter(views)} views
                </h1>
                <h1 className="text-lg font-semibold text-gray-700 ">
                    {formatedDate}
                </h1>
            </div>
            {isClosed && (
                <p
                    onClick={() => setIsClosed(false)}
                    className="text-sm hover:underline cursor-pointer transition-all w-fit"
                >
                    show more...
                </p>
            )}
            {!isClosed && (
                <div>
                    <p>{descriptionData}</p>
                    <button
                        onClick={() => setIsClosed(true)}
                        className="text-sm hover:underline cursor-pointer transition-all w-fit"
                    >
                        show less...
                    </button>
                </div>
            )}
        </div>
    );
};

export default Description;

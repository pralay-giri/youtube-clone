import React from "react";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./WatchPage";
import ErrorPage from "./ErrorPage";
import MainContainer from "./MainContainer";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    path: "/",
                    element: <MainContainer />,
                },
                {
                    path: "/watch",
                    element: <WatchPage />,
                },
                {
                    path: "/channel",
                    element: <ErrorPage />,
                },
            ],
            errorElement: <ErrorPage />,
        },
    ]);

    return (
        <div className="overflow-x-hidden">
            <Header />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

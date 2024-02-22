import React from "react";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./WatchPage";
import ErrorPage from "./ErrorPage";
import MainContainer from "./MainContainer";
import ResultPage from "./ResultPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <React.Fragment>
                    <Header />
                    <Body />
                </React.Fragment>
            ),
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
                    path: "/result",
                    element: <ResultPage />,
                },
                {
                    path: "/channel",
                    element: <p>channel</p>,
                },
            ],
            errorElement: <ErrorPage />,
        },
    ]);

    return (
        <div className="overflow-x-hidden">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

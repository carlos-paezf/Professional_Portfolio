import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layout";


export const router = createBrowserRouter( [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <></>,
        children: [
            { path: "about", element: <></> },
            { path: "resume", element: <></> },
            { path: "portfolio", element: <></> },
            { path: "blog", element: <></> },
            { path: "contact", element: <></> }
        ]
    }
] );
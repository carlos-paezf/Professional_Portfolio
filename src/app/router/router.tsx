import { createBrowserRouter } from "react-router";

import { AppLayout } from "../layout";
import { AboutPage, BlogPage, ContactPage, NotFoundPage, PortfolioPage, ResumePage } from "../pages";


export const router = createBrowserRouter( [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "about", element: <AboutPage /> },
            { path: "resume", element: <ResumePage /> },
            { path: "portfolio", element: <PortfolioPage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "contact", element: <ContactPage /> }
        ]
    }
] );
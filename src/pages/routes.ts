import { createBrowserRouter } from "react-router";
import AlbumsPage from "./AlbumsPage.tsx";
import RootPage from "./RootPage.tsx";
import AlbumDetailPage from "./AlbumDetailPage.tsx";
import { Outlet } from "react-router";

export const router = createBrowserRouter([
    {
        path: "",
        Component: RootPage,
    },
    {
        path: "albums",
        Component: Outlet,
        children: [
            {
                path: "", Component: AlbumsPage
            },
            { path: "detail", Component: AlbumDetailPage }
        ],
    },
]);
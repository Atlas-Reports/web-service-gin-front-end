import { createBrowserRouter } from "react-router";
import AlbumsPage from "./AlbumsPage.tsx";
import RootPage from "./RootPage.tsx";

export const router = createBrowserRouter([
    {
        path: "",
        Component: RootPage,
    },
    {
        path: "albums",
        Component: AlbumsPage,
    }
]);
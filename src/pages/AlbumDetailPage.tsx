import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { getAlbumByID } from "../backend";
import type { Album } from "../model";

export default function AlbumDetailPage() {
    const location = useLocation();
    const [album, setAlbum] = useState<Album | undefined>();

    useEffect(() => {
        getAlbumByID(location.state.id).then((album) => {
            console.log(album);
            setAlbum(album);
        }).catch(error => {
            console.error("Error fetching album by ID:", error);
        });
    }, [location.state.id]);

    return (
        <div className="flex justify-center p-2 h-full">
            <div className="p-2 dark:bg-gray-800">
                <h1 className='text-center'>Album Detail</h1>
                <h2>{album?.title}</h2>
                <p className="flex justify-between">Artist: <span>{album?.artist}</span></p>
                <p className="flex justify-between">Price: <span>${album?.price.toFixed(2)}</span></p>
            </div>
        </div>
    );
}
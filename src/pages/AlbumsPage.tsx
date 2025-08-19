import { useEffect, useState } from "react";
import { getAlbums } from "../backend";
import { type Album } from "../model";
import { AlbumCard } from "../components";

export default function AlbumsPage() {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        getAlbums().then((albums: Album[]) => {
            setAlbums(albums);
        }).catch(error => {
            console.error("Error fetching albums:", error);
        });
    }, []);

    return (
        <div className='flex gap-2 p-2'>
            {
                albums.map(album => {
                    return (
                        <AlbumCard key={album.id} album={album} />
                    );
                })
            }
        </div>
    );
}
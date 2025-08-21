import { useEffect, useState } from "react";
import { getAlbums } from "../backend";
import { type Album } from "../model";
import { AlbumCard } from "../components";

export default function AlbumsPage() {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [iisCreateModalOpen, setIsCreateModalOpen] = useState(false);

    useEffect(() => {
        getAlbums().then((albums: Album[]) => {
            setAlbums(albums);
        }).catch(error => {
            console.error("Error fetching albums:", error);
        });
    }, []);

    return (
        <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-center">
                <button className="flex items-center justify-center dark:bg-blue-500 px-2 gap-1">
                    Create
                    <span className='text-lg'>
                    +
                    </span>
                </button>
            </div>
            <div className="flex gap-2">
                {
                    albums.map(album => {
                        return (
                            <AlbumCard key={album.id} album={album} />
                        );
                    })
                }
            </div>
        </div>
    );
}

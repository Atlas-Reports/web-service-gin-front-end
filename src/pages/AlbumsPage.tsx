import { type FormEvent, useEffect, useState } from "react";
import { getAlbums, createAlbum } from "../backend";
import { type Album } from "../model";
import { AlbumCard } from "../components";
import { createPortal } from "react-dom";
import { CreateModal } from "../components";

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

    const handleCreateClick = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newAlbum: Album = {
            id: Date.now().toString(), // Temporary ID, should be replaced by backend
            title: formData.get("title") as string,
            artist: formData.get("artist") as string,
            price: parseFloat(formData.get("price") as string),
        };
        createAlbum(newAlbum).then((createdAlbum: Album) => {
            setAlbums(prevAlbums => [...prevAlbums, createdAlbum]);
            handleCloseCreateModal();
        }).catch(error => {
            console.error("Error creating album:", error);
        });
    };

    return (
        <>
            <div className="p-2 flex flex-col gap-2">
                <div className="flex justify-center">
                    <button onClick={handleCreateClick} type="button"
                            className="cursor-pointer flex items-center justify-center dark:bg-blue-500 px-2 gap-1">
                        Create
                        <span className="text-lg">
                    +
                    </span>
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {
                        albums.map(album => {
                            return (
                                <AlbumCard key={album.id} album={album} />
                            );
                        })
                    }
                </div>
            </div>
            {iisCreateModalOpen && createPortal(
                <CreateModal onCancel={handleCloseCreateModal} onSubmit={handleSubmit} />,
                document.body
            )}
        </>
    );
}

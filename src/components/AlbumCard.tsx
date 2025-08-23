import { type Album } from "../model";

interface Props {
    album: Album;
    onClick: (id: string) => void;
}

export default function AlbumCard({ album, onClick: toDetail }: Props) {
    return (
        <div className="p-2 dark:bg-gray-800" onClick={() => toDetail(album.id || "")}>
            <h2>{album.title}</h2>
            <p>Artist: {album.artist}</p>
            <p>Price: ${album.price.toFixed(2)}</p>
        </div>
    );
}
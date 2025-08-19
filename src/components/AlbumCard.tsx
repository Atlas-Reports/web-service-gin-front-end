import { type Album } from '../model';

interface Props {
    album: Album;
}

export default function AlbumCard({ album }: Props) {
    return (
        <div className='p-2 dark:bg-gray-800 w-xl'>
            <h2>{album.title}</h2>
            <p>Artist: {album.artist}</p>
            <p>Price: ${album.price.toFixed(2)}</p>
        </div>
    );
}
import { instance } from "./axios.ts";
import { type Album } from '../model';

export const getAlbums: () => Promise<Album[]> = async () => {
    const response = await instance.get('/albums');
    return response.data;
};

export const createAlbum = async (album: Album) => {
    const response = await instance.post('/albums', album);
    return response.data;
}

export const getAlbumByID = async (id: string) => {
    const response = await instance.get(`/albums/${id}`);
    return response.data;
};
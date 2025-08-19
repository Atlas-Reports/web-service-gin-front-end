import { instance } from "./axios.ts";
import { type Album } from '../model';

export const getAlbums: () => Promise<Album[]> = async () => {
    const response = await instance.get('/albums');
    return response.data;
};
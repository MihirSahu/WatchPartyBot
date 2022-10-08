import axios from 'axios';

const base_URL = "https://api.jikan.moe/v4/anime/";

export const getAnimeInfo = async (animeId: string) => {

    //console.log(base_URL + animeId);

    return axios.get(base_URL + animeId);
}
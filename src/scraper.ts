import axios from 'axios';
import fs from 'fs';

const base_URL = "https://api.jikan.moe/v4/anime/";

export const getAnimeInfo = async (animeId: string) => {

    axios.get(base_URL + animeId)
        .then((response) => {
            fs.writeFile(`${animeId}.json`, JSON.stringify(response.data), (err) => console.log("Data written to file!"));
        })
        .catch((error) => console.log(error));
}
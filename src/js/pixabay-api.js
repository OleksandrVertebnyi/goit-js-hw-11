import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51725578-d0a8f96afb46d4a0bb7439ad8'; 

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}

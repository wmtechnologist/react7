import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID e9cee8f1d71a95c0a99fe8b7dd01506eceb34a5a9a91521f2ae84c0e14dff0df',
        }
});

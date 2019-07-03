import axios from 'axios';

const KEY = 'AIzaSyBlHfjlUZFrR-7DEubj6qt3EFlOKdOD4V4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

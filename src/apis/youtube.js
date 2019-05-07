import axios from 'axios';

const KEY = 'AIzaSyBdyTMxX9yLaQTdkPerawA4DhVq4ePlgWQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
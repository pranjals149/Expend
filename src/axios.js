import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/expend-ed499/us-central1/api' // The api(cloud function) URL
});

export default instance;
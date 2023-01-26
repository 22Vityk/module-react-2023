import axios from 'axios';

const axiosService = axios.create({baseURL:'https://api.spacexdata.com/v3'})
export {axiosService};


import {axiosService} from "./axiosService";
import {urls} from "../config";


const postsService = {

	getById:(postId)=> axiosService.get(`${urls.posts}/${postId}`)
}

export {postsService}
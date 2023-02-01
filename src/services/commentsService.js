import {axiosService} from "./axiosService"
import {urls} from "../config";




const commentsService = {
		getAll:()=> axiosService.get(urls.comments),
		// getById:(postId)=> axiosService.get(`${urls.posts}/${postId}`)
}
export {commentsService}
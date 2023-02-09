import {axiosService} from "./axiosService";
import {urls} from "../configs";


const postService = {
	getAll:()=>axiosService.get(urls.post)
}

export {
	postService
}
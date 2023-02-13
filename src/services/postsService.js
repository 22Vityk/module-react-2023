
import {urls} from "../configs";
import {axiosService} from "./axiosService";

const postsService = {
		getAll:()=>axiosService.get(urls.post)
}


export {postsService}
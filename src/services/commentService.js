import {axiosService} from "./axiosService";
import {urls} from "../configs";


const commentServics = {
	getAll:()=> axiosService.get(urls.comment)
}

export {commentServics}
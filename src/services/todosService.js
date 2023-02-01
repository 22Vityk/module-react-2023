import {axiosService} from "./axiosService"
import {urls} from "../config";

const todosService = {
	getAll:()=> axiosService.get(urls.todos)

}

export {todosService}
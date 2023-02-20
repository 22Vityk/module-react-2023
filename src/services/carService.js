
import {urls} from "../config";
import {apiService} from "./apiService";


const carService = {
		getAll:(page =1)=>apiService.get(urls.cars.cars, {params:{page}}),
		create:(data)=>apiService.post(urls.cars.cars, data),
		updateById:(id, data)=>apiService.put(urls.cars.byId(id), data),
		deleteById:(id)=>apiService.delete(urls.cars.byId(id))

}

export {
	carService
}
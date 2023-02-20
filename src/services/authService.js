import {apiService} from "./apiService";
import {urls} from "../config";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'


const authService = {
	login: async  function (cred){
	const response =  await apiService.post(urls.auth.login, cred);
	if (response.status === 200){
		this.setTokens(response.data)
	}
	return response
	},


	refresh: async  function (refresh) {
	const response =	await apiService.post( urls.auth.refresh, {refresh} )
	if (response.status === 200){
		this.setTokens(response.data)

	}

	},
	me:()=>apiService.get(urls.auth.me),

	setTokens:({access, refresh})=>{
		localStorage.setItem(accessTokenKey, access)
		localStorage.setItem(refreshTokenKey, refresh)
	},
	getAccessToken:()=>localStorage.getItem(accessTokenKey),
	getRefreshToken:()=>localStorage.getItem(refreshTokenKey),
	deleteTokens:()=>{
		localStorage.removeItem(accessTokenKey)
		localStorage.removeItem(refreshTokenKey)
	},
	isAuthenticated:()=>!!localStorage.getItem(accessTokenKey)



}


export {authService}
import http from "@/shared/api/http.client.js";


export default async function init(){
	const getUserResponse = await http.get('/users/me')
	this.setUser({...getUserResponse.data})
	this.isInitialized = true;
}

import http from "@/shared/api/http.client.js";


export default async function refreshToken() {
	try{
		const refreshTokenResponse = await http.post('/auth/refresh')
		this.setToken(refreshTokenResponse.data.accessToken)
	}
	catch(err){
		throw err;
	}

	return
}

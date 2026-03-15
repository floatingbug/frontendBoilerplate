import http from "@/services/http.service.js";


export default async function refreshToken() {
	const refreshTokenResponse = await http.post('/auth/refresh')
	this.setToken(refreshTokenResponse.data.accessToken)

	const getUserResponse = await http.get('/users/me')
	this.setUser(getUserResponse.data)

	return
}

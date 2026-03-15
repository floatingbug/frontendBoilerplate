import http from "@/services/http.service.js";


export default async function signOut() {
	http.post('/auth/sign-out')
}

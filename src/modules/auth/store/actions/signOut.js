import http from "@/shared/api/http.client.js";


export default async function signOut() {
	http.post('/auth/sign-out')
}

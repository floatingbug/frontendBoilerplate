import http from "@/shared/api/http.client.js";
import services from "../../services";


export default async function signOut() {
	await services.signOut();
	this.clear();
}

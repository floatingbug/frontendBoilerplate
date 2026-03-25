import http from "@/shared/api/http.client.js";


async function getUser() {
	return await http.get('/users/me')
}

async function updateAccount({payload}){
	return await http.patch("/account", payload);
}

async function deleteAccount() {
	return await http.delete('/users/me')
}


export default {
	getUser,
	updateAccount,
	deleteAccount,
};

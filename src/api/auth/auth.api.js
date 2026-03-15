import http from "@/services/http.service.js";


async function updateAccount({payload}){
	return await http.patch("/account", payload);
}

async function getUser() {
	return await http.get('/users/me')
}

async function confirmEmail({ token }) {
	return await http.get(`/account/confirm-email?token=${token}`)
}

async function deleteAccount() {
	return await http.delete('/users/me')
}

export default {
	updateAccount,
	getUser,
	confirmEmail,
	deleteAccount,
};

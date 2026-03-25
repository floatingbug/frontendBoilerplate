import http from '@/shared/api/http.client.js'


async function confirmEmail({ token }) {
	return await http.get(`/account/confirm-email?token=${token}`)
}

async function verifyEmail({ token }) {
	return http.get(`/auth/verify-email?token=${token}`)
}

async function resendVerificationEmail({ email }) {
	return http.post('/auth/verify-email/resend', { email })
}

async function requestPasswordReset({ email }) {
	return http.post('/auth/forgot-password', { email })
}

async function resetPassword({ token, password }) {
	return http.post('/auth/reset-password', { token, password })
}

async function signin({ credentials }) {
	return http.post('/auth/sign-in', credentials)
}

async function signup(data) {
	return http.post('/auth/sign-up', data)
}

async function logout() {
	return http.post('/auth/sign-out')
}


export default {
	signin,
	signup,
	logout,
	confirmEmail,
	verifyEmail,
	resendVerificationEmail,
	requestPasswordReset,
	resetPassword,
};

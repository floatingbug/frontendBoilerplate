import { defineStore } from 'pinia'
import http from '@/shared/api/http.client.js'
import actions from "./actions";

const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
		token: null,
		isAuthenticated: false,
		isInitialized: false,
	}),

	actions,
})


export default useAuthStore;

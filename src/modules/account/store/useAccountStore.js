import {defineStore} from "pinia";
import actions from "./actions";


export default defineStore("account", {
	state: () => ({
		user: {
			name: "",
			email: "",
		}
	}),

	actions,
});

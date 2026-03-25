import authApi from "../api";


export default async function resetPassword({token, password}){
	return await authApi.resetPassword({token, password});
}

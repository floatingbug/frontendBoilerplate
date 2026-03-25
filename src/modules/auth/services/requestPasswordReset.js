import authApi from "../api";


export default async function requestPasswordReset({email}){
	return await authApi.requestPasswordReset({email});
}

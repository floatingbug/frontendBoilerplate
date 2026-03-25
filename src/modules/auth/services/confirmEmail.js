import authApi from "../api";


export default async function confirmEmail({token}){
	return await authApi.confirmEmail({token});
}

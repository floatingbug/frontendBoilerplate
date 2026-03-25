import authApi from "../api";


export default async function verifyEmail({token}){
	return await authApi.verifyEmail({token});
}

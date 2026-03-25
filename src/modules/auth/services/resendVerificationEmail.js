import authApi from "../api";


export default async function resendVerificationEmail({email}){
	return await authApi.resendVerificationEmail({email});
}

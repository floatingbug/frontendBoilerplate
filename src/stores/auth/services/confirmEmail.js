import {authAPI} from "@/api";


export default async function confirmEmail({token}){
	return authAPI.confirmEmail({token});
}

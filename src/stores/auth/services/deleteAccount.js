import {authAPI} from "@/api";


export default async function deleteAccount(){
	return authAPI.deleteAccount();
}

import {authAPI} from "@/api";


export default async function updateAccount({payload}){
	return await authAPI.updateAccount({payload});
}

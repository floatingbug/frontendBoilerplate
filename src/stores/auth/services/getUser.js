import {authAPI} from "@/api";


export default async function getUser(){
	return authAPI.getUser();
}

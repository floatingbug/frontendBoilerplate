import accountApi from "../api";


export default async function getUser(){
	return await accountApi.getUser();
}

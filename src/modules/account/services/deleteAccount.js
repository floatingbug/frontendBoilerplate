import accountApi from "../api";


export default async function deleteAccount(){
	return await accountApi.deleteAccount();
}

import accountApi from "../api";


export default async function updateAccount({payload}){
	return await accountApi.updateAccount({payload});
}

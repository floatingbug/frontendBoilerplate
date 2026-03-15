import services from "../services";


export default async function updateAccount({payload}){
	return await services.updateAccount({payload});
}

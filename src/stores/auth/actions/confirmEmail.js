import services from "../services";


export default async function confirmEmail({token}){
	return await services.confirmEmail({token});
}

import authApi from "../api";


export default async function signOut(){
	return await authApi.signOut();
}

export default function setUser({email, name, id}){
	if(email){
		this.user.email = email;
	}
	if(name){
		this.user.name = name;
	}
	if(id){
		this.user.id = id;
	}
}

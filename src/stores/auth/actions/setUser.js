export default function setUser(user) {
	this.user = user
	this.isAuthenticated = !!user
}

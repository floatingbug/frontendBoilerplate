export default function getDefaultItems({router, authStore}){
	return [
		{
			label: "Sign Out",
			icon: "pi pi-sign-out",
			command: () => authStore.signOut(),
		},
	];
}

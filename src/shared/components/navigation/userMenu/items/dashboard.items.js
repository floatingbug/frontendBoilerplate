export default function getDashboardItems({router, authStore}){
	return [
		{
			label: "Settings",
			icon: "pi pi-cog",
			command: () => router.push("/settings/profile"),
		},
		{
			label: "Sign Out",
			icon: "pi pi-sign-out",
			command: () => authStore.signOut(),
		},
	];
}

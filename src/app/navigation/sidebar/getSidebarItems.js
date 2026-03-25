import settingsItems from "./settings.items.js";
import dashboardItems from "./dashboard.items.js";


export default function getSidebarItems({page} = {}){
	const sidebarMap = {
		dashboard: dashboardItems,
		settings: settingsItems,
	};

	const items = sidebarMap[page] || [];

	return [...items];
}

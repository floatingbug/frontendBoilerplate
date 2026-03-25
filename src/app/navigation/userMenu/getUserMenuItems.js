import userMenuItems from "./userMenu.items.js";


export default function getUserMenuItems({isMobile = null} = {}){
	const items = [...userMenuItems];

	if(isMobile){
		items.push({
		});
	}

	return items;
}

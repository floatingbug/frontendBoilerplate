import items from "./items";


export default function getSidebarItems({context}){
	switch(context){
		case "dashboard" :
			return items.getDashboardItems();

		default :
			return items.getDefaultItems();
	}
}

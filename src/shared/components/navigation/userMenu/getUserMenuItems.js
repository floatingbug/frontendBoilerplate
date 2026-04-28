import items from "./items";


export default function getUserMenuItems({context, router, authStore}){
	switch(context){
		case "dashboard" :
			return items.getDashboardItems({router, authStore});

		default :
			return items.getDefaultItems({router, authStore});
	}
}

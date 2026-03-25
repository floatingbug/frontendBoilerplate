import HomeView from '../views/HomeView.vue'
import { PublicLayout } from '@/app/layouts'
import {navItems} from "./config";

export default [
	{
		path: '/',
		component: PublicLayout,
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView,
				meta: {
					breadcrumb: 'Home',
					navItems,
				},
			},
		],
	},
]

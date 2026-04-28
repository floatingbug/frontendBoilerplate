import HomeView from '../views/HomeView.vue'
import { PublicLayout } from '@/app/layouts'

export default [
	{
		path: '/',
		component: PublicLayout,
		meta: {
			context: "home",
		},
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView,
				meta: {
					breadcrumb: 'Home',
				},
			},
		],
	},
]

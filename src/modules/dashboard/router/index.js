import { DashboardLayout } from '@/app/layouts'
import { sidebarItems } from './config'


export default [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardLayout,
		meta: {
			requiresAuth: true,
			breadcrumb: 'Dashboard',
			sidebar: 'dashboard',
			sidebarItems,
		},
		children: [],
	},
]

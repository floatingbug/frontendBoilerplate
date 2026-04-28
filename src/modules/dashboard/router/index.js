import { AppLayout } from '@/app/layouts'


export default [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: AppLayout,
		meta: {
			requiresAuth: true,
			context: "dashboard",
		},
		children: [
		],
	},
]

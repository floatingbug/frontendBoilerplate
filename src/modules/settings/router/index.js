import { AppLayout } from '@/app/layouts'
import { ProfileView, ConfirmEmailCallbackView } from '../views'


export default [
	{
		path: '/settings',
		component: AppLayout,
		meta: {
			breadcrumb: 'Settings',
			context: "settings",
		},
		children: [
			{
				path: 'profile',
				component: ProfileView,
				meta: {
					breadcrumb: 'Profile',
				},
			},
		],
	},
	{
		path: '/confirm-email-change',
		component: ConfirmEmailCallbackView,
	},
]

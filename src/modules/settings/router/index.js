import { SettingsLayout } from '@/app/layouts'
import { ProfileView, ConfirmEmailCallbackView } from '../views'


export default [
	{
		path: '/settings',
		component: SettingsLayout,
		meta: { breadcrumb: 'Settings' },
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

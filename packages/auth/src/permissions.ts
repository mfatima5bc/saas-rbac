import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
	user: User,
	builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
	ADMIN(user, { can, cannot }) {
		can('manage', 'all')

		cannot(['transfer_ownership', 'update'], 'Organization') // i cant put the condition in a cannot option when a give the manage role
		can(['transfer_ownership', 'update'], 'Organization', {
			ownerId: { $eq: user.id },
		})
	},
	MEMBER(user, { can }) {
		// nevar user manage all
		can('get', 'User')
		can(['create', 'get'], 'Project')
		can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
	},
	BILLING(_, { can }) {
		can('manage', 'Billing')
	},
}

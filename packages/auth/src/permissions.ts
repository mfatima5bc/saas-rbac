import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
	user: User,
	builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
	ADMIN(_, { can }) {
		can('manage', 'User')
	},
	MEMBER(_, { can }) {
		can('manage', 'Project')
		can('transfer_ownership', 'Organization')
	},
	BILLING() {},
}

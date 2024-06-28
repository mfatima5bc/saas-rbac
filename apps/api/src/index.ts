import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteOtherUser = ability.can('invite', 'User')
const usercantDelteOtherUser = ability.can('delete', 'User')

console.log(userCanInviteOtherUser)
console.log(usercantDelteOtherUser)

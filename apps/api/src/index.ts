import { ability } from '@saas/auth'

const userCanInviteOtherUser = ability.can('invite', 'User')
const usercantDelteOtherUser = ability.can('delete', 'User')

console.log(userCanInviteOtherUser)
console.log(usercantDelteOtherUser)
